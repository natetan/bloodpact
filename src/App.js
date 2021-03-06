import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import firebase from "firebase/app";
import "./App.css";
import { MainNavBar } from "./components/navs/MainNavBar";
import { HomeView } from "./components/views/HomeView";
import { SignUpView } from "./components/views/SignUpView";
import { SignInView } from "./components/views/SignInView";
import { BloodPactFooter } from "./components/footers/BloodPactFooter";
import { DashboardView } from "./components/views/DashboardView";
import { getUserStats } from "./services/CapstoneApi.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errorMessage: null,
			tab: 1
		};
	}

	componentDidMount() {
		this.authUnregFunc = firebase.auth().onAuthStateChanged(firebaseUser => {
			// If user is logged in
			if (firebaseUser) {
				this.setState({ user: firebaseUser });
				getUserStats(this.state.user.uid).then(data => {
					this.setState({ userStats: data });
				});
			} else {
				this.setState({
					firebaseUser: null,
					user: null
				});
			}
		});
	}

	handleSignUp = user => {
		if (user.password !== user.passwordConfirmation) {
			this.setState({ errorMessage: "Passwords do not match" });
			return;
		} else {
			// Create user with Firebase
			firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.password)
				.then(userCredentials => {
					return userCredentials.user;
				})
				.then(fbUser => {
					let userRef = firebase.database().ref(`people/${fbUser.uid}`);
					userRef.set({
						firstName: user.firstName,
						lastName: user.lastName,
						birthdate: user.birthdate,
						email: user.email,
						pintsDonated: 0,
						donationGoal: 10,
						donations: ["2019-01-01", "2019-03-03", "2019-05-05"],
						nextEligibleDate: "2019-06-30"
					});
					fbUser
						.updateProfile({
							displayName: user.firstName
						})
						.then(() => {
							this.setState({
								displayName: user.firstName
							});
						})
						.catch(err => {
							this.setState({ errorMessage: err.message });
						});
				})
				.catch(err => {
					this.setState({ errorMessage: err.message });
				});
		}
	};

	handleSignIn = user => {
		if (!user.email || !user.password) {
			this.setState({ errorMessage: "Fields cannot be left blank." });
		}
		this.setState({ errorMessage: null });
		firebase
			.auth()
			.signInWithEmailAndPassword(user.email, user.password)
			.catch(err => {
				this.setState({ errorMessage: err.message });
			});
	};

	handleSignOut = () => {
		this.setState({ errorMessage: null });
		firebase
			.auth()
			.signOut()
			.catch(err => {
				this.setState({ error: err.message });
			});
	};

	switchTabs = tab => {
		this.setState({ tab: tab });
	};

	render() {
		let signUpView = routerProps => {
			return (
				<SignUpView
					{...routerProps}
					errorMessage={this.state.errorMessage}
					handleSignUp={this.handleSignUp}
				/>
			);
		};

		let signInView = routerProps => {
			return (
				<SignInView
					{...routerProps}
					errorMessage={this.state.errorMessage}
					handleSignIn={this.handleSignIn}
				/>
			);
		};

		let nav;
		if (this.state.user) {
			nav = (
				<MainNavBar
					displayName={this.state.user.displayName}
					email={this.state.user.email}
					handleSignOut={this.handleSignOut}
				/>
			);
		} else {
			nav = <MainNavBar />;
		}

		let mainView = routerProps => {
			if (this.state.userStats && this.state.user) {
				return (
					<DashboardView
						{...routerProps}
						tab={this.state.tab}
						switchTabs={this.switchTabs}
						displayName={this.state.userStats.displayName}
						uid={this.state.user.uid}
					/>
				);
			} else {
				return <HomeView {...routerProps} />;
			}
		};
		return (
			<div className="App">
				{nav}
				<Switch>
					<Route exact path={"/"} render={mainView} />
					<Route path="/signup/" render={signUpView} />
					<Route path="/signin/" render={signInView} />
					<Redirect to={"/"} />
				</Switch>
				<BloodPactFooter />
			</div>
		);
	}
}

export default App;

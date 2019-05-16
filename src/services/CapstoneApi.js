import fetch from 'node-fetch'

const baseUrl = 'https://infocapstone2019-server.herokuapp.com';

export async function getDrives(zipcode) {
  let res = await fetch(`${baseUrl}/drives/${zipcode}`);
  return res.json();
}

export async function getAllGroups() {
  let res = await fetch(`${baseUrl}/groups/all`);
  return res.json();
}

export async function getGroup(groupName) {
  let res = await fetch(`${baseUrl}/groups/${groupName}`);
  return res.json();
}

export function getUserGroups(uid) {
  let res = await fetch(`${baseUrl}/users/${uid}/groups`);
  return res.json();
}

export async function createGroup(name, uid, firstName, lastName, pintsDonated = 3) {
  let members = {};
  members[uid] = {
    firstName: firstName,
    lastName: lastName
  };
  let options = {
    method: 'POST',
    body: {
      name: name,
      friendlyName: name.toLowerCase().split(' ').join('-'),
      createdDate: new Date().toISOString().substring(0, 10),
      members: members,
      pintsDonated: pintsDonated
    }
  };

  let res = await fetch(`${baseUrl}/groups/create`, options);
  return res.json();
}

export function joinGroup(groupName, uid, firstName, lastName) {
  let options = {
    method: 'PUT',
    body: {
      uid: uid,
      firstName: firstName,
      lastName: lastName,
    }
  };
  let res = await fetch(`${baseUrl}/groups/${groupName}/join`, options);
  return res.json();
}
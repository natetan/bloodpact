import React, { Component } from 'react';
import { BloodPactJumbo } from '../jumbotrons/BloodPactJumbo'
import { LeftSectionFeature, RightSectionFeature } from '../featurettes/SectionFeature';
import strings from '../../resources/strings/Strings.json';

export class HomeView extends Component {
  render() {
    return (
      <div>
        <BloodPactJumbo />
        <LeftSectionFeature title={'The British Are Coming!!!!!'} content={strings.fillerText}/>
        <RightSectionFeature title={'New Album Coming Out'} content={strings.fillerText}/>
      </div>
    )
  }
}
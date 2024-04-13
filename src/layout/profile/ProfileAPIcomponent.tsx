import React from 'react';
import { Profile } from './Profile';
import axios from 'axios';
import { ProfileType } from '../../redux/profileReducer';

type ProfilePropsType = {
	setUserProfile: (profile: ProfileType) => void;
};
export class ProfileApiComponent extends React.Component <ProfilePropsType> {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2}`).then((response) => {
         this.props.setUserProfile(response.data);
      });
   }
   render() {
      return <Profile {...this.props} />;
   }
}

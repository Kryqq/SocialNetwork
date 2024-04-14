import React from 'react';
import axios from 'axios';
import { Profile } from './Profile';
import { ProfileType } from '../../redux/profileReducer';
import { RouteComponentProps } from 'react-router-dom';
interface RouteParams {
   userId: string;
}
type ProfilePropsType = {
   setUserProfile: (profile: ProfileType) => void;
   profile: ProfileType | null;
};
export class ProfileApiComponent extends React.Component<ProfilePropsType & RouteComponentProps<RouteParams>> {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = '2';
      }

      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
         this.props.setUserProfile(response.data);
      });
   }
   render() {
      return <Profile {...this.props} />;
   }
}

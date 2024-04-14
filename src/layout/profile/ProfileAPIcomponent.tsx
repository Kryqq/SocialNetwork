import React from 'react';
import { Profile } from './Profile';
import { ProfileType } from '../../redux/profileReducer';
import { RouteComponentProps } from 'react-router-dom';
import { usersAPI } from '../../api/api';
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

      usersAPI.setUserProfile(userId).then((response) => {
         this.props.setUserProfile(response.data);
      });
   }
   render() {
      return <Profile {...this.props} />;
   }
}

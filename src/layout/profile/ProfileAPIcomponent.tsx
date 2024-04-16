import React from 'react';
import { Profile } from './Profile';
import { ProfileType } from '../../redux/profileReducer';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
   userId: string;
}
type ProfilePropsType = {
   setUserProfileThunkCreator: (userId: string) => void;
   profile: ProfileType | null;
};
export class ProfileApiComponent extends React.Component<ProfilePropsType & RouteComponentProps<RouteParams>> {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = '2';
      }

      this.props.setUserProfileThunkCreator(userId);
   }
   render() {
      return <Profile {...this.props} />;
   }
}

import React from 'react';
import { Profile } from './Profile';
import { ProfileType } from '../../redux/profileReducer';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
   userId: string;
}
type ProfilePropsType = {
   setUserProfileThunkCreator: (userId: string) => void;
   getStatusThunkCreator: (userId: string) => void;
   updateStatusThunkCreator: (status: string) => void;
   profile: ProfileType | null;
   status: string;
};
export class ProfileApiComponent extends React.Component<ProfilePropsType & RouteComponentProps<RouteParams>> {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = '31076';
      }

      this.props.setUserProfileThunkCreator(userId);
      this.props.getStatusThunkCreator(userId);
   }
   render() {
      return <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatusThunkCreator} />;
   }
}

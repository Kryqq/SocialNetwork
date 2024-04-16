import React from 'react';
import { Header } from './Header';
import { AuthReducerType } from '../../redux/authReducer';
import { usersAPI } from '../../api/api';

type HeaderPropsType = {
   isAuth: boolean;
   login: string | null;
   setUsersAuthThunkCreator: () => void;
};

export class HeaderAPIContainer extends React.Component<HeaderPropsType> {
   componentDidMount() {
      this.props.setUsersAuthThunkCreator();
   }
   render() {
      return <Header {...this.props} />;
   }
}

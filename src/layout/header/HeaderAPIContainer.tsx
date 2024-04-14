import React from 'react';
import { Header } from './Header';
import { AuthReducerType } from '../../redux/authReducer';
import axios from 'axios';

type HeaderPropsType = {
   isAuth: boolean;
   login: string | null;
   setUserAuthData: (data: AuthReducerType) => void;
};

export class HeaderAPIContainer extends React.Component<HeaderPropsType> {
   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true }).then((response) => {
 
         if (response.data.resultCode === 0) {
            this.props.setUserAuthData(response.data.data);
         }
      });
   }
   render() {
      return <Header {...this.props} />;
   }
}

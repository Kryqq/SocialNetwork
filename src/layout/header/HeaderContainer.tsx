import { connect } from 'react-redux';
import { HeaderAPIContainer } from './HeaderAPIContainer';
import {  setUserAuthData } from '../../redux/authReducer';
import { StateType } from '../../redux/reduxStore';

const mapStateToProps = (state: StateType) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
});

export const HeaderContainer = connect(mapStateToProps, { setUserAuthData })(HeaderAPIContainer);

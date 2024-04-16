import { connect } from 'react-redux';
import { HeaderAPIContainer } from './HeaderAPIContainer';
import { StateType } from '../../redux/reduxStore';
import { setUsersAuthThunkCreator } from '../../redux/authReducer';

const mapStateToProps = (state: StateType) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
});

export const HeaderContainer = connect(mapStateToProps, { setUsersAuthThunkCreator })(HeaderAPIContainer);

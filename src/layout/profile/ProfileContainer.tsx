import {
   getStatusThunkCreator,
   setUserProfileThunkCreator,
   updateStatusThunkCreator,
} from '../../redux/profileReducer';
import { ProfileApiComponent } from './ProfileAPIcomponent';
import { StateType } from '../../redux/reduxStore';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';
import { ComponentType } from 'react';

const mapStateToProps = (state: StateType) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
});

export const ProfileContainer = compose<ComponentType>(
   connect(mapStateToProps, { setUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
   //    WithAuthRedirect,
   withRouter
)(ProfileApiComponent);

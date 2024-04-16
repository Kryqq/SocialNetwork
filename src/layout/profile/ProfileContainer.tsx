import { setUserProfile, setUserProfileThunkCreator } from '../../redux/profileReducer';
import { ProfileApiComponent } from './ProfileAPIcomponent';
import { StateType } from '../../redux/reduxStore';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state: StateType) => ({
   profile: state.profilePage.profile,
});

const withUrlDataContainerComponent = withRouter(ProfileApiComponent);

export const ProfileContainer = connect(mapStateToProps, { setUserProfileThunkCreator })(withUrlDataContainerComponent);

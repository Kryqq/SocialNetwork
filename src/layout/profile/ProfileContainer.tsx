import { setUserProfile } from '../../redux/profileReducer';
import { ProfileApiComponent } from './ProfileAPIcomponent';
import { StateType } from '../../redux/store';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state: StateType) => ({
   profile: state.profilePage.profile,
});

const withUrlDataContainerComponent = withRouter(ProfileApiComponent);

export const ProfileContainer = 
connect(mapStateToProps, 
	  {setUserProfile })
	  (withUrlDataContainerComponent);

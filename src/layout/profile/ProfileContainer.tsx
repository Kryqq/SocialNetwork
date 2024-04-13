import { setUserProfile } from '../../redux/profileReducer';
import { ProfileApiComponent } from './ProfileAPIcomponent';
import { StateType } from '../../redux/store';
import { connect } from 'react-redux';

const mapStateToProps = (state: StateType) => ({
   propfile: state.profilePage.profile,
});

export const ProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileApiComponent);

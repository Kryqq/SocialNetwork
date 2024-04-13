import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import { StateType } from '../../../redux/reduxStore';
import { Posts } from './Posts';

const mapStateToProps = (state: StateType) => {
   return {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText,
   };
};

export const PostsContainer = connect(mapStateToProps, { updateNewPostText, addPost })(Posts);

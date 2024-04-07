import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { DispatchType, StateType } from '../../../redux/reduxStore';
import { Posts } from './Posts';

const mapStateToProps = (state: StateType) => {
   return {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText,
   };
};

const mapDispatchToProps = (dispatch: DispatchType) => {
   return {
      updateNewPostText: (text: string) => {
         dispatch(updateNewPostTextActionCreator(text));
      },
      addPostHandler: () => {
         dispatch(addPostActionCreator());
      },
   };
};

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

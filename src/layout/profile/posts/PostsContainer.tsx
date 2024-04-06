import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { StoreType } from '../../../redux/reduxStore';
import { Posts } from './Posts';

type PostsContainerPropsType = {
   store: StoreType;
};

export const PostsContainer = (props: PostsContainerPropsType) => {
   const state = props.store.getState();
   const addPostHandler = () => {
      props.store.dispatch(addPostActionCreator());
   };

   const postChangeHandler = (text: string) => {
      props.store.dispatch(updateNewPostTextActionCreator(text));
   };

   return (
      <Posts
         postsData={state.profilePage.postsData}
         newPostText={state.profilePage.newPostText}
         updateNewPostText={postChangeHandler}
         addPostHandler={addPostHandler}
      />
   );
};

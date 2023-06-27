import { ActionReducerMapBuilder, AnyAction } from '@reduxjs/toolkit';
import { IPostsInitialState } from '../interfaces/postInterface';
import {
  addPost, deleteLike, deletePost, getAllComments, getAllPosts, sendComment, setLike, updatePost,
} from '../thunks/postsThunks';

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
const postsExtraReducers = (builder: ActionReducerMapBuilder<IPostsInitialState>) => {
  builder
    .addCase(addPost.pending, (state) => {
      state.errors = [];
    })
    .addCase(getAllComments.pending, (state) => {
      state.errors = [];
    })
    .addCase(getAllPosts.pending, (state) => {
      state.errors = [];
    })
    .addCase(updatePost.pending, (state) => {
      state.errors = [];
    })
    .addCase(sendComment.pending, (state) => {
      state.errors = [];
    })
    .addCase(setLike.pending, (state) => {
      state.errors = [];
    })
    .addCase(deleteLike.pending, (state) => {
      state.errors = [];
    })
    .addCase(deletePost.pending, (state) => {
      state.errors = [];
    })
    .addCase(addPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      const posts = state.posts.filter((p) => +p.id !== +action.payload.id);
      state.posts = posts;
    })
    .addCase(updatePost.fulfilled, (state, action) => {
      const post = state.posts.find((p) => +p.id === +action.payload.id);
      if (post) {
        if (post.attributes.content) {
          post.attributes.content = action.payload.attributes.content;
        }
      }
    })
    .addCase(getAllComments.fulfilled, (state, action) => {
      state.selectedPost = action.payload.selectedPostId;
      if (action.payload.comments) {
        state.comments = action.payload.comments.data;
        state.senders = action.payload.comments.included;
      }
    })
    .addCase(getAllPosts.fulfilled, (state, action) => {
      state.errors = [];
      state.posts = action.payload;
    })
    .addCase(sendComment.fulfilled, (state, action) => {
      state.errors = [];
      state.comments.push(action.payload.comment[0]);
      state.senders.push(action.payload.sender[0]);
    })
    .addCase(setLike.fulfilled, (state, action) => {
      const likedPost = state.posts.find((post) => +post.id === +action.payload.attributes.postLikeId);
      if (likedPost) {
        likedPost.attributes.isMeLike = !likedPost.attributes.isMeLike;
        if (!likedPost.attributes.likesCount) {
          likedPost.attributes.likesCount = 1;
        } else {
          likedPost.attributes.likesCount += 1;
        }
      }
    })
    .addCase(deleteLike.fulfilled, (state, action) => {
      const likedPost = state.posts.find((post) => +post.id === +action.payload.attributes.postLikeId);
      if (likedPost) {
        likedPost.attributes.isMeLike = !likedPost.attributes.isMeLike;
        if (!likedPost.attributes.likesCount) {
          likedPost.attributes.likesCount = 1;
        } else {
          likedPost.attributes.likesCount -= 1;
        }
      }
    })
    /* .addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter((p: IPostItem) => p.id !== action.payload.id);
    }) */
    .addMatcher(isError, (state, action) => {
      state.errors = action.payload;
    });
};
export default postsExtraReducers;

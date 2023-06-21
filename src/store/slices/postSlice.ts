import {
  createAsyncThunk, createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { postAPI } from '../../api/api';
import {
  IAddPost, IPostItem, IPost, IOnLike, IOnLikePayload, ICommentItem, ISetComments,
} from './interfaces/postInterface';
import { AppDispatch } from '../store';
import { IUserItem } from './interfaces/dialogInterface';

const initialState: IPost = {
  posts: [],
  comments: [],
  senders: [],
  selectedPost: '',
};
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPostItem[]>) => {
      state.posts = action.payload;
    },
    selectCommentPost: (state, action: PayloadAction<string>) => {
      state.selectedPost = action.payload;
    },
    setComments: (state, action: PayloadAction<ISetComments>) => {
      state.comments = action.payload.data;
      state.senders = action.payload.included;
    },
    setPost: (state, action: PayloadAction<IPostItem>) => {
      state.posts.push(action.payload);
    },
    setComment: (state, action: PayloadAction<{ comment: ICommentItem[], sender: IUserItem[]}>) => {
      state.comments.push(action.payload.comment[0]);
      state.senders.push(action.payload.sender[0]);
    },
    onLike: (state, action: PayloadAction<IOnLikePayload>) => {
      const likedPost = state.posts.find((post) => +post.id === +action.payload.attributes.postLikeId);
      if (likedPost) {
        likedPost.attributes.isMeLike = !likedPost.attributes.isMeLike;
        if (!likedPost.attributes.likesCount) {
          likedPost.attributes.likesCount = '1';
        } else {
          likedPost.attributes.likesCount += action.payload.like;
        }
      }
    },
    deletePost: (state, action: PayloadAction<IPostItem>) => {
      state.posts = state.posts.filter((p: IPostItem) => p.id !== action.payload.id);
    },
  },
});
export const {
  setPost, setComment, setComments, selectCommentPost, setPosts, onLike,
} = postSlice.actions;

export default postSlice.reducer;

interface IGetAllComments {
  token: string,
  id: string,
  postId: string,
}

export const getAllComments = createAsyncThunk<void, IGetAllComments, { dispatch: AppDispatch }>(
  'post/getAllComments',
  async (data, { dispatch }) => {
    if (data.postId === data.id) {
      dispatch(selectCommentPost(''));
    } else {
      const response = await postAPI.getAllComments(data);
      dispatch(setComments(response.data));
      dispatch(selectCommentPost(data.id));
    }
  },
);
export const addPost = createAsyncThunk<void, IAddPost, { dispatch: AppDispatch }>(
  'post/addPost',
  async (data, { dispatch }) => {
    const response = await postAPI.addPost(data);
    dispatch(setPost(response.data.data));
  },
);
export const sendComment = createAsyncThunk<void, { id: string, token: string, message: string}
  , { dispatch: AppDispatch }>(
    'post/sendComment',
    async (data, { dispatch }) => {
      const response = await postAPI.sendComment(data);
      dispatch(setComment({ comment: response.data.data, sender: response.data.included }));
    },
  );
export const getAllPosts = createAsyncThunk<void, { token: string, id: string }, { dispatch: AppDispatch }>(
  'post/getAllPosts',
  async (data, { dispatch }) => {
    const response = await postAPI.getAllPosts(data);
    dispatch(setPosts(response.data.data));
  },
);
export const setLike = createAsyncThunk<void, IOnLike, { dispatch: AppDispatch }>(
  'post/setLike',
  async (data, { dispatch }) => {
    const response = await postAPI.setLike({ id: data.id, token: data.token });
    dispatch(onLike({ ...response.data.data, like: 1 }));
  },
);
export const deleteLike = createAsyncThunk<void, IOnLike, { dispatch: AppDispatch }>(
  'post/deleteLike',
  async (data, { dispatch }) => {
    const response = await postAPI.deleteLike({ id: data.id, token: data.token });
    dispatch(onLike({ ...response.data.data, like: -1 }));
  },
);

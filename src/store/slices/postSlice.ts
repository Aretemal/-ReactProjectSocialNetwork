import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postAPI } from '../../api/api';
import { IAddPost, IPostItem, IPost } from './interfaces/postInterface';
import { AppDispatch } from '../store';

const initialState: IPost = {
  posts: [],
};
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPostItem[]>) => {
      state.posts = action.payload;
    },
    setPost: (state, action: PayloadAction<IPostItem>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<IPostItem>) => {
      state.posts = state.posts.filter((p: IPostItem) => p.id !== action.payload.id);
    },
  },
});
export const { setPost, setPosts } = postSlice.actions;

export default postSlice.reducer;

export const addPost = createAsyncThunk<void, IAddPost, { dispatch: AppDispatch }>(
  'post/addPost',
  async (data, { dispatch }) => {
    const response = await postAPI.addPost(data);
    dispatch(setPost(response.data.data));
  },
);
export const getAllPosts = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
  'post/getAllPosts',
  async (token, { dispatch }) => {
    const response = await postAPI.getAllPosts(token);
    dispatch(setPosts(response.data.data));
  },
);

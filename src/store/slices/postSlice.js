import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postAPI } from '../../api/api.js';

const initialState = {
  posts: [],
  isFetching: true,
};
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((p) => p.id !== action.payload.id);
    },
    toggleIsFetching: (state) => {
      state.isFetching = !state.isFetching;
    },
  },
});
export const { setPost, setPosts } = postSlice.actions;

export default postSlice.reducer;

export const addPost = createAsyncThunk(
  'post/addPost',
  async (data, { dispatch }) => {
    const response = await postAPI.addPost(data);
    dispatch(setPost(response.data.data));
  },
);
export const getAllPosts = createAsyncThunk(
  'post/getAllPosts',
  async (token, { dispatch }) => {
    const response = await postAPI.getAllPosts(token);
    dispatch(setPosts(response.data.data));
  },
);

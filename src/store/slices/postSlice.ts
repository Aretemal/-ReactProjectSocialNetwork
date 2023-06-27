import { createSlice } from '@reduxjs/toolkit';
import { IPostsInitialState } from './interfaces/postInterface';
import postsExtraReducers from './extraReducers/postsExtraReducer';

const initialState: IPostsInitialState = {
  posts: [],
  comments: [],
  senders: [],
  selectedPost: '',
  errors: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: postsExtraReducers,
});

export default postSlice.reducer;

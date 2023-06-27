import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import { IError } from '../interfaces/allInterfaces';
import { postAPI } from '../../../api/api';
import {
  IComment, IPost,
} from '../interfaces/postInterface';
import { IUserItem } from '../interfaces/dialogInterface';

interface IGetAllCommentsData {
  token: string,
  id: string,
  postId: string,
}
interface IGetAllCommentsResponse {
  selectedPostId: string,
  comments?: {
    data: IComment[],
    included: IUserItem[],
  },
}

export const getAllComments = createAsyncThunk<
  IGetAllCommentsResponse, IGetAllCommentsData,
  { dispatch: AppDispatch, rejectValue: IError[] }>(
    'post/getAllComments',
    async (data, { rejectWithValue }) => {
      if (data.postId === data.id) {
        return { selectedPostId: '' };
      }
      const response = await postAPI.getAllComments(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return { selectedPostId: data.id, comments: response.data };
    },
  );
interface IAddPostData {
  newMessageText: string,
  token: string,
}
export const addPost = createAsyncThunk<
  IPost, IAddPostData,
  { dispatch: AppDispatch, rejectValue: IError[] }>(
    'post/addPost',
    async (data, { rejectWithValue }) => {
      const response = await postAPI.addPost(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return response.data.data;
    },
  );
interface IDeletePostData {
  id: string,
  token: string,
}
export const deletePost = createAsyncThunk<
  IPost, IDeletePostData,
  { dispatch: AppDispatch, rejectValue: IError[] }>(
    'post/deletePost',
    async (data, { rejectWithValue }) => {
      const response = await postAPI.deletePost(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return response.data.data;
    },
  );
interface IUpdatePostData {
  id: string,
  token: string,
  content: string,
}
export const updatePost = createAsyncThunk<
  IPost, IUpdatePostData,
  { dispatch: AppDispatch, rejectValue: IError[] }>(
    'post/updatePost',
    async (data, { rejectWithValue }) => {
      const response = await postAPI.updatePost(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return response.data.data;
    },
  );
interface ISendCommentResponse {
  comment: IComment[],
  sender: IUserItem[]
}
interface ISendCommentData {
  id: string,
  token: string,
  message: string
}
export const sendComment = createAsyncThunk<
  ISendCommentResponse, ISendCommentData
  , { dispatch: AppDispatch, rejectValue: IError[] }>(
    'post/sendComment',
    async (data, { rejectWithValue }) => {
      const response = await postAPI.sendComment(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return { comment: response.data.data, sender: response.data.included };
    },
  );
interface IGetAllPostsData {
  token: string,
  id: string
}
export const getAllPosts = createAsyncThunk<
  IPost[],
  IGetAllPostsData, { dispatch: AppDispatch, rejectValue: IError[] }>(
    'post/getAllPosts',
    async (data, { rejectWithValue }) => {
      const response = await postAPI.getAllPosts(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return response.data.data;
    },
  );

export interface IOnLikeData {
  id: string,
  token: string,
}

export interface IOnLikeResponse {
  attributes: {
    senderLikeId: string,
    postLikeId: string,
  }
}

export const setLike = createAsyncThunk<
  IOnLikeResponse,
  IOnLikeData,
  { dispatch: AppDispatch, rejectValue: IError[] }>(
    'post/setLike',
    async (data, { rejectWithValue }) => {
      const response = await postAPI.setLike({ id: data.id, token: data.token });
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return { ...response.data.data };
    },
  );
export const deleteLike = createAsyncThunk<
  IOnLikeResponse,
  IOnLikeData, { dispatch: AppDispatch, rejectValue: IError[] }>(
    'post/deleteLike',
    async (data, { rejectWithValue }) => {
      const response = await postAPI.deleteLike({ id: data.id, token: data.token });
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return { ...response.data.data };
    },
  );

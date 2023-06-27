import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/usersInterface';
import { AppDispatch } from '../../store';
import { IError } from '../interfaces/allInterfaces';
import { followAPI, usersAPI } from '../../../api/api';

interface IRequestUsersResponse {
  data: IUser[],
  meta: { countOfUsers: number },
  currentPage: number,
}
interface IRequestUsersData {
  currentPage: number,
  pageSize: number,
  token: string,
}
export const requestUsers = createAsyncThunk<
  IRequestUsersResponse, IRequestUsersData, { dispatch: AppDispatch, rejectValue: IError[] }>(
    'users/requestUsers',
    async (data, { rejectWithValue }) => {
      const response = await usersAPI.requestUsers(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      response.data.currentPage = data.currentPage;
      return response.data;
    },
  );
interface IFollowData {
  id: string,
  token: string,
}
export const follow = createAsyncThunk<
  string,
  IFollowData,
  { dispatch: AppDispatch, rejectValue: IError[] }>(
    'users/follow',
    async (data, { rejectWithValue }) => {
      const response = await followAPI.follow(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return data.id;
    },
  );
export const approve = createAsyncThunk<
  string, IFollowData,
  { dispatch: AppDispatch, rejectValue: IError[] }>(
    'users/approve',
    async (data, { rejectWithValue }) => {
      const response = await followAPI.approve(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return data.id;
    },
  );
export const unfollow = createAsyncThunk<
  string,
  IFollowData,
  { dispatch: AppDispatch, rejectValue: IError[] }>(
    'users/unfollow',
    async (data, { rejectWithValue }) => {
      const response = await followAPI.unfollow(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return data.id;
    },
  );

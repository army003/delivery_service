import { createSelector, createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

const initialState = {
  isAuth: false,
  access: null,
  refresh: null,
  userInfo: {}
};

const baseSelector = state => state.auth;

export const getAccessToken = createSelector([baseSelector], state => state.access);
export const getIsAuth = createSelector([baseSelector], state => state.isAuth);
export const getUserInfo = createSelector([baseSelector], state => state.userInfo);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = true;
      state.access = payload.access;
      const userData = jwt_decode(payload.access);
      state.userInfo = userData;
    },
    signOut: state => {
      state.isAuth = false;
      state.access = null;
      state.userInfo = null;
    }
  },
  extraReducers: builder => {}
});

export const { setAuth, signOut } = authSlice.actions;

export default authSlice.reducer;

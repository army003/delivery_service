import { createSelector, createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

const initialState = {
  isAuth: false,
  access: null,
  refresh: null,
  userInfo: {},
  isAdmin: false
};

const baseSelector = state => state.auth;

export const getAccessToken = createSelector([baseSelector], state => state.access);
export const getIsAuth = createSelector([baseSelector], state => state.isAuth);
export const getUserInfo = createSelector([baseSelector], state => state.userInfo);
export const getIsAdmin = createSelector([baseSelector], state => state.isAdmin);

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
      state.isAdmin = false;
    },
    setIsAdmin: (state, { payload }) => {
      state.isAdmin = payload;
    }
  },
  extraReducers: builder => {}
});

export const { setAuth, signOut, setIsAdmin } = authSlice.actions;

export default authSlice.reducer;

import { createSelector, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  isAuth: false,
  access: null,
  refresh: null
};

const baseSelector = state => state.auth;

export const getAccessToken = createSelector([baseSelector], state => state.access);
export const getIsAuth = createSelector([baseSelector], state => state.isAuth);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = true;
      state.access = payload.access;
      state.refresh = payload.refresh;
    }
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  }
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;

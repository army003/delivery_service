import { createSelector, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const name = 'errors';

const initialState = {
  errors: [],
  customError: {
    code: undefined,
    description: undefined
  }
};

const baseSelector = state => state.errors;

export const getErrors = createSelector([baseSelector], state =>
  state.errors.length > 0
    ? {
        message: state.errors.join(' ')
      }
    : null
);

export const getCustomErrors = createSelector([baseSelector], state => state.customError);

export const errorSlice = createSlice({
  name,
  initialState,
  reducers: {
    setError(state, { payload }) {
      state.errors.push(payload);
    },
    setCustomError(state, { payload }) {
      state.customError = payload;
    },
    clearError(state) {
      state.errors = [];
    },
    clearCustomError(state) {
      state.customError = {};
    }
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  }
});

export const { setError, clearError, setCustomError, clearCustomError } = errorSlice.actions;

export default errorSlice.reducer;

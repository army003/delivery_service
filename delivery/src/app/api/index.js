import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { PURGE } from 'redux-persist';

import { setError } from '@/app/store/slices/error';

const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  prepareHeaders: (headers, { getState }) => {
    headers.set('Accept', 'application/json');
    return headers;
  }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {};

//http://192.168.1.194:8000
export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({})
});

import { setCustomError } from '../store/slices/error';

export const notificationMiddleware = api => next => action => {
  if (action.payload?.data?.data) return next(action);

  const code = action.payload?.data?.error?.code;

  if (String(code).toLowerCase() === 'error' || code === 'EXTERNAL_SERVICE_ERROR') {
    api.dispatch(setCustomError(action.payload?.data?.error));
  }

  return next(action);
};

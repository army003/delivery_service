import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { getIsAuth } from '../store/slices/auth';

export const RequireAuth = ({ children }) => {
  const isAuth = useSelector(getIsAuth);
  const location = useLocation();

  const navigate = useNavigate();
  if (!isAuth) {
    return <Navigate to={'/'} replace={true} />;
  }

  return children;
};

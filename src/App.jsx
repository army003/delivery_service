import 'twin.macro';

import { Fragment, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  useAuthMutation,
  useChangeStatusMutation,
  useCreateOrderMutation,
  useGetDataQuery,
  useGetOrdersQuery
} from './app/api/application';
import { ThemeContext } from './contexts/theme-context';
import MainPage from './pages/main-page';
import Layout from './views/layout';

function App() {
  const { data: orders } = useGetOrdersQuery();
  const { data } = useGetDataQuery();
  const { theme, setTheme } = useContext(ThemeContext);
  const [changeStatus] = useChangeStatusMutation();
  const [createOrder] = useCreateOrderMutation();
  const [auth] = useAuthMutation();

  useEffect(() => {
    //
    // changeStatus();
    // auth();
    setTheme('light');
  }, [setTheme]);

  return (
    <Fragment>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<MainPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

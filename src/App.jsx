import 'twin.macro';

import { Fragment, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAuthMutation, useCreateOrderMutation, useGetDataQuery } from './app/api/application';
import { pathnames } from './app/utils/pathnames';
import { ThemeContext } from './contexts/theme-context';
import MainPage from './pages/main-page';
import Layout from './views/layout';

function App() {
  const { data } = useGetDataQuery();
  const { theme, setTheme } = useContext(ThemeContext);

  const [createOrder] = useCreateOrderMutation();
  const [auth] = useAuthMutation();

  useEffect(() => {
    //
    auth();
    setTheme('light');
  }, [setTheme]);

  return (
    <Fragment>
      <Routes>
        <Route element={<Layout />}>
          <Route path={pathnames.main} element={<MainPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

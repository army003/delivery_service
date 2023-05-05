import 'twin.macro';

import { Fragment, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAuthMutation, useChangeStatusMutation, useCreateOrderMutation } from './app/api/application';
import { ThemeContext } from './contexts/theme-context';
import AdminCouriersPage from './pages/admin/admin-couriers-page';
import AdminLayout from './pages/admin/admin-layout';
import AdminProfilePage from './pages/admin/admin-profile-page';
import AdminSuppliers from './pages/admin/admin-suppliers';
import AllProductsPage from './pages/all-products-page';
import ConfirmationPage from './pages/confirmation-page';
import CourierAuth from './pages/courier/auth';
import CourierMain from './pages/courier/main';
import CustomerCheckoutPage from './pages/customer-checkout-page';
import MainPage from './pages/main-page';
import OrderCheckoutPage from './pages/order-checkout-page';
import ProductPage from './pages/product-page';
import Layout from './views/layout';

function App() {
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
          <Route path={'/products/:supplier_id'} element={<AllProductsPage />} />
          <Route path={'/product/:id'} element={<ProductPage />}>
            <Route path={'/product/:id/customer-info'} element={<CustomerCheckoutPage />} />
            <Route path={'/product/:id/delivery-info'} element={<OrderCheckoutPage />} />
            <Route path={'/product/:id/confirmation'} element={<ConfirmationPage />} />
          </Route>
        </Route>
        <Route path={'/auth'} element={<CourierAuth />} />
        <Route path={'/delivery'} element={<CourierMain />} />
        <Route element={<Layout />}>
          <Route element={<AdminLayout />}>
            <Route path={'/admin-profile'} element={<AdminProfilePage />} />
            <Route path={'/admin-suppliers'} element={<AdminSuppliers />} />
            <Route path={'/admin-couriers'} element={<AdminCouriersPage />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

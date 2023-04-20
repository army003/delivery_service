import 'twin.macro';

import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './footer';
import Header from './header';

function Layout() {
  return (
    <div tw='h-[100vh] flex flex-col justify-between'>
      <Header />
      <div tw='max-w-[1000px] mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

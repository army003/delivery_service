import 'twin.macro';

import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header';

function Layout() {
  return (
    <div tw='flex flex-col justify-between h-full gap-20'>
      <Header />
      <div tw='w-[950px] mx-auto'>
        <div tw='w-full'>
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;

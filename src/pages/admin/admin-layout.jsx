import 'twin.macro';

import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './navbar';
function AdminLayout() {
  return (
    <div tw='flex gap-5'>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;

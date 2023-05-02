import 'twin.macro';

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getIsAuth } from '@/app/store/slices/auth';
import Header from '@/views/header';

import AllOrders from './all-orders';
import MyOrders from './my-orders';

function CourierMain() {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuth);
  useEffect(() => {
    !isAuth && navigate('/auth');
  }, [isAuth]);

  return (
    <div tw='flex flex-col justify-between h-full gap-20'>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'all' ? <AllOrders /> : <MyOrders />}
    </div>
  );
}

export default CourierMain;

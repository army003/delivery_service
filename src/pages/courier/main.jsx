import 'twin.macro';

import React from 'react';
import { useState } from 'react';

import Header from '@/views/header';

import AllOrders from './all-orders';
import MyOrders from './my-orders';

function CourierMain() {
  const [activeTab, setActiveTab] = useState('all');
  console.log(activeTab);
  return (
    <div tw='flex flex-col justify-between h-full gap-20'>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'all' ? <AllOrders /> : <MyOrders />}
    </div>
  );
}

export default CourierMain;

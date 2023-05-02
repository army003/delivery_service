/* eslint-disable jsx-a11y/no-static-element-interactions */
import 'twin.macro';

import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineUser } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { MdExitToApp } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getIsAuth, getUserInfo, setAuth, signOut } from '@/app/store/slices/auth';
import Logo from '@/assets/logo.png';
import { Input2, Selector, SubBody } from '@/components';
import { PURGE } from 'redux-persist';

const items = [
  { title: 'All aplications', value: 'all' },
  { title: 'My aplications', value: 'my' }
];

function Header({ activeTab, setActiveTab }) {
  const { control } = useForm();
  const isAuth = useSelector(getIsAuth);
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate('/auth');
  };

  return (
    <div tw='bg-secondary py-3 shadow-sm '>
      <div tw='max-w-[950px] mx-auto flex w-full items-center justify-between'>
        {isAuth ? (
          <button
            onClick={() => {
              navigate('/delivery');
            }}
          >
            <TbTruckDelivery size={40} />
          </button>
        ) : (
          <div
            tw='rotate-45'
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={Logo} alt='logo' width={50} />
          </div>
        )}
        {!isAuth && (
          <div tw='bg-primary rounded-2xl flex items-center px-5 w-[300px]'>
            <CiSearch size={30} />
            <Input2 control={control} name='search' placeholder={'Поиск'} />
          </div>
        )}
        {isAuth && (
          <>
            <div tw='bg-input p-3 rounded-lg flex gap-2 items-center'>
              <AiOutlineUser size={40} />
              <div tw=' flex flex-col'>
                <SubBody text={userInfo?.username} variant={'bold'} />
                <SubBody text={userInfo?.email} variant={'bold'} />
                <SubBody text={userInfo?.mobile_phone} variant={'bold'} />
              </div>
            </div>
            <div>
              <Selector items={items} getActiveItem={setActiveTab} defaultActiveItem={'all'} />
            </div>
            <div tw='relative cursor-pointer' onClick={handleSignOut}>
              <MdExitToApp size={30} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;

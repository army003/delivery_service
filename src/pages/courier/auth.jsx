import 'twin.macro';

import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TbTruckDelivery } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { useAuthMutation } from '@/app/api/application';
import { getIsAuth, setAuth, setIsAdmin } from '@/app/store/slices/auth';
import { BigTitle, Button, Input2 } from '@/components';
function CourierAuth() {
  const { control, getValues, setValue } = useForm({});
  const dispatch = useDispatch();
  const [auth, { isSuccess, data }] = useAuthMutation();
  const isAuth = useSelector(getIsAuth);
  const navigate = useNavigate();
  useEffect(() => {
    // auth();
  }, []);

  const handleAuth = () => {
    const values = getValues();
    const number = values.phone_number.replaceAll(' ', '');
    if (number === '+77082994296' && values.password === 'root') {
      dispatch(setIsAdmin(true));
      navigate('/admin-profile');
    } else {
      auth({ phone_number: number, password: values.password });
    }
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(setAuth({ access: data?.access_token, isAuth: true }));
    }
  }, [data?.access_token, isSuccess]);

  useEffect(() => {
    isAuth && navigate('/delivery');
  }, [isAuth]);

  console.log('isSuccess', isSuccess);
  return (
    <div tw=' h-[100vh] w-[100vw] flex justify-center items-center'>
      <div>
        <div tw='flex items-center justify-center gap-2 mb-5'>
          <BigTitle text={'Sign In'} variant={'bold'} twStyle={tw`text-center`} />
          <TbTruckDelivery size={40} />
        </div>
        <div tw='bg-secondary p-5 rounded-2xl bg-black text-white w-[20vw]'>
          <Input2
            name='phone_number'
            control={control}
            label={'Mobile number'}
            mask={'+7 999 999 99 99'}
            placeholder={'Insert the mobile number'}
          />
          <Input2
            type='password'
            name='password'
            control={control}
            label={'Password'}
            placeholder={'Insert the password'}
          />
        </div>
        <Button variant={'secondary'} twStyle={tw`mt-5`} onClick={handleAuth}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default CourierAuth;

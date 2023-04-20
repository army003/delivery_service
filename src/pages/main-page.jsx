import 'twin.macro';

import React from 'react';

import { SubTitle } from '@/components';
function MainPage() {
  const items = ['Товар', 'Товар', 'Товар', 'Товар', 'Товар'];
  return (
    <div tw='flex flex-col gap-10'>
      <div tw='flex gap-5 font-bold'>
        <section tw='w-full rounded-lg bg-secondary p-5 '>Manufaturer</section>
        <section tw='w-full rounded-lg bg-secondary p-5 '>Distributor</section>
        <section tw='w-full rounded-lg bg-secondary p-5 '>Importer</section>
      </div>
      <div>
        <SubTitle text={'Название категории'} variant={'bold'} />
        <div tw='flex gap-5 font-bold mt-5'>
          {items?.map(item => (
            <section tw='w-full rounded-lg bg-secondary p-5 cursor-pointer'>{item}</section>
          ))}
        </div>
      </div>
      <div>
        <SubTitle text={'Название категории'} variant={'bold'} />
        <div tw='flex gap-5 font-bold mt-5'>
          {items?.map(item => (
            <section tw='w-full rounded-lg bg-secondary p-5 cursor-pointer'>{item}</section>
          ))}
        </div>
      </div>
      <div>
        <SubTitle text={'Название категории'} variant={'bold'} />
        <div tw='flex gap-5 font-bold mt-5'>
          {items?.map(item => (
            <section tw='w-full rounded-lg bg-secondary p-5 cursor-pointer'>{item}</section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;

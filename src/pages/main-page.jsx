/* eslint-disable react/jsx-key */
import 'twin.macro';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PURGE } from 'redux-persist';
import tw from 'twin.macro';

import { useGetSuppliersQuery } from '@/app/api/application';
import Distributor from '@/assets/distributor.jpg';
import Importer from '@/assets/impoter.jpg';
import Manufacturer from '@/assets/manufacturer.jpg';
import { Button, Caption, Modal, SubBody, SubTitle, Title } from '@/components';

function MainPage() {
  const [open, setOpen] = useState(false);
  const [activeSupplier, setActiveSupplier] = useState(null);
  const [activeCompany, setActiveCompany] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: suppliersData } = useGetSuppliersQuery(
    { supplier_type: activeSupplier?.type },
    { skip: !activeSupplier }
  );
  const suppliers = [
    { type: 'manufacturer', img: Manufacturer, title: 'Manufacturer' },
    { type: 'importer', img: Importer, title: 'Importer' },
    { type: 'distributor', img: Distributor, title: 'Distributor' }
  ];
  const items = ['Товар', 'Товар', 'Товар', 'Товар', 'Товар'];
  const handleClick = item => {
    setOpen(true);
    setActiveSupplier(item);
  };

  const handleNavigate = () => {
    navigate(`/products/${activeCompany}`, {
      state: { supplier: suppliersData?.find(item => item.supplier_id === activeCompany) }
    });
  };

  useEffect(() => {
    dispatch({ type: PURGE, result: () => null });
  }, []);

  return (
    <div tw='flex flex-col gap-10'>
      <div tw='flex gap-5'>
        {suppliers?.map(item => (
          <button onClick={() => handleClick(item)} key={item.type}>
            <section tw='w-full rounded-lg bg-secondary cursor-pointer hover:shadow-2xl transition-shadow relative'>
              <img src={item?.img} alt='' tw='rounded-lg hover:transform hover:-translate-y-4 transition-transform' />
            </section>
          </button>
        ))}
        {/* <section tw='w-full rounded-lg bg-secondary  cursor-pointer hover:shadow-xl transition-shadow'>
          <img src={Importer} alt='' tw='rounded-lg  hover:transform hover:-translate-y-4 transition-transform' />
        </section>
        <section tw='w-full rounded-lg bg-secondary cursor-pointer hover:shadow-xl transition-shadow'>
          <img src={Distributor} alt='' tw='rounded-lg  hover:transform hover:-translate-y-4 transition-transform' />
        </section> */}
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
      <Modal open={open} setOpen={setOpen} twStyle={tw`rounded-2xl`}>
        <div tw='flex flex-col gap-5'>
          <Title text={`Choose ${activeSupplier?.title}`} variant={'bold'} />
          {activeSupplier?.type === 'importer' && <SubBody text={'OC - Origin Country'} />}

          <div tw='grid grid-cols-3 gap-2'>
            {suppliersData?.map(item => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                key={item.id}
                tw='border border-black py-2 px-3 rounded-md cursor-pointer'
                onClick={() => {
                  setActiveCompany(item.supplier_id);
                  console.log(item);
                }}
                css={[activeCompany === item.supplier_id && tw`bg-black transition-colors text-white`]}
              >
                <SubBody text={item?.title} variant={'bold'} />
                {item?.supplier_type === 'manufacturer' && (
                  <Caption text={`Product: ${item?.product_type}`} twStyle={tw`text-secondary`} variant={'bold'} />
                )}
                {item?.supplier_type === 'importer' && (
                  <Caption text={`OC: ${item?.origin_country}`} twStyle={tw`text-secondary`} variant={'bold'} />
                )}
                {item?.supplier_type === 'distributor' && (
                  <Caption text={`Region: ${item?.region}`} twStyle={tw`text-secondary`} variant={'bold'} />
                )}
              </div>
            ))}
          </div>
          <Button variant={'secondary'} disabled={!activeCompany} onClick={handleNavigate}>
            Choose
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default MainPage;

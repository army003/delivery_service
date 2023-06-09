/* eslint-disable jsx-a11y/no-static-element-interactions */
import 'twin.macro';

import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { PURGE } from 'redux-persist';

import { useGetProductsQuery } from '@/app/api/application';
import { BodyText, SubBody, Title } from '@/components';

function AllProductsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    state: { supplier }
  } = useLocation();

  const { data: products, isLoading } = useGetProductsQuery(supplier.supplier_id, { skip: !supplier.supplier_id });

  useEffect(() => {
    dispatch({ type: PURGE, result: () => null });
  }, []);

  return (
    <div>
      <Title text={`${String(supplier.supplier_type).toUpperCase()}: ${supplier?.title}`} variant={'bold'} />
      {isLoading && <ClipLoader />}
      <div tw='grid grid-cols-5 mt-5 gap-3'>
        {products?.map(item => (
          <div
            key={item.id}
            tw='overflow-hidden rounded-2xl bg-secondary flex flex-col w-full justify-between cursor-pointer'
            onClick={() => navigate(`/product/${item.product_id}`)}
          >
            <div tw='overflow-hidden h-[200px] w-[300px] relative'>
              <img src={`..${item?.data}`} alt={item.name} tw='absolute ' />
            </div>
            <div tw='bg-secondary p-5 flex flex-col gap-2 border border-black rounded-b-2xl'>
              <BodyText text={item.name} variant={'bold'} />
              <SubBody
                text={
                  <span>
                    <b>Price:</b> {item?.price} ₸
                  </span>
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;

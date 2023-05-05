import 'twin.macro';

import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { ClipLoader } from 'react-spinners';
import tw from 'twin.macro';

import { useGetSuppliersQuery } from '@/app/api/application';
import { BodyText, Input2, Modal, SubBody } from '@/components';
import Selector from '@/views/selector';
function AdminSuppliers() {
  const { control } = useForm();
  const [open, setOpen] = useState(false);

  const [activeSupplier, setActiveSupplier] = useState('manufacturer');
  const options = [
    { title: 'Manufacturer', value: 'manufacturer' },
    { title: 'Distributor', value: 'distributor' },
    { title: 'Importer', value: 'importer' }
  ];
  const { data: supplier, isLoading } = useGetSuppliersQuery(
    { supplier_type: activeSupplier },
    { skip: !activeSupplier }
  );
  return (
    <div tw='bg-secondary rounded-2xl p-5 w-full'>
      <div tw='bg-primary rounded-2xl flex items-center px-5 w-[300px] mb-5'>
        <CiSearch size={30} />
        <Input2 control={control} name='search' placeholder={'Поиск'} />
      </div>
      <Selector options={options} defaultActiveItem={'manufacturer'} setActiveItem={setActiveSupplier} />
      {isLoading ? (
        <ClipLoader />
      ) : (
        <div tw='grid grid-cols-3 gap-5 pt-5 items-center'>
          {supplier?.map(item => (
            <div key={item.id} tw='flex flex-col gap-1 border border-grey p-2 rounded-md'>
              <BodyText text={item?.title} variant={'bold'} twStyle={tw`text-[rgba(129, 0, 139, 1)]`} />
              <SubBody text={item?.address} />
              <SubBody text={item?.number} />
            </div>
          ))}
          <div tw='cursor-pointer flex items-center justify-center' onClick={() => setOpen(true)}>
            <AiOutlinePlusCircle color='rgba(129, 0, 139, 1)' size={30} />
          </div>
        </div>
      )}
      <Modal open={open} setOpen={setOpen}></Modal>
    </div>
  );
}

export default AdminSuppliers;

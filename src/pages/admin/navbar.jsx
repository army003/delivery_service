/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import 'twin.macro';

import React from 'react';
import { BsWrenchAdjustable } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { Title } from '@/components';
function Navbar() {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  console.log(location);
  const sections = [
    { title: 'Profile', path: '/admin-profile', icon: <CgProfile size={30} /> },
    { title: 'Suppliers', path: '/admin-suppliers', icon: <BsWrenchAdjustable size={30} /> },
    { title: 'Couriers', path: '/admin-couriers', icon: <MdOutlineDeliveryDining size={30} /> }
  ];
  return (
    <div tw='flex flex-col bg-secondary rounded-2xl shadow-md max-h-[270px]'>
      {sections?.map((item, idx) => (
        <div
          tw='flex gap-5 items-center p-7'
          css={[
            location === item.path && tw`bg-[rgba(129, 0, 139, 0.2)] text-[rgba(129, 0, 139, 1)] transition-colors`,
            idx === 0 && tw`rounded-t-2xl`,
            idx === sections.length - 1 && tw`rounded-b-2xl`
          ]}
          onClick={() => navigate(item.path)}
        >
          {item.icon}
          <Title text={item.title} variant={'bold'} />
        </div>
      ))}
    </div>
  );
}

export default Navbar;

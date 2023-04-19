import 'twin.macro';

import { NavLink } from 'react-router-dom';

import BackIcon from '@/assets/images/icons/BackIcon';

import { BigTitle } from '../big-title/big-title';

export function PageTitle({ pathToBack, text }) {
  return (
    <div tw='flex items-center gap-2 lg:gap-6 my-5 lg:my-8 pl-4 lg:p-0'>
      <NavLink tw='flex items-center justify-center' to={pathToBack}>
        <BackIcon width='25' height='25' />
      </NavLink>
      <BigTitle text={text} />
    </div>
  );
}

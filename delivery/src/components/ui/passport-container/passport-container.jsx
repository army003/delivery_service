import 'twin.macro';

import React from 'react';
import tw from 'twin.macro';

import { SubBody } from '../sub-body/sub-body';
function PassportContainer({ icon, photo, text, isThird = false }) {
  return (
    <div tw='bg-primary rounded-xl flex  p-3 gap-3 overflow-hidden'>
      <div tw='text-left text-secondary flex flex-col gap-3'>
        {icon}
        <SubBody text={text} />
      </div>
      <img src={photo} alt='passportPhoto' tw='max-w-[100px] max-h-[150px]' css={isThird && tw`max-w-[110px] -mr-3`} />
    </div>
  );
}

export default PassportContainer;

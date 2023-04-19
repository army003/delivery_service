import React from 'react';
import tw from 'twin.macro';

import { BigTitle } from '../big-title/big-title';
import { SubBody } from '../sub-body/sub-body';

function PercentageBox({ percent, currency }) {
  return (
    <div tw='flex flex-col items-center '>
      <BigTitle text={percent} twStyle={tw`text-green lg:text-[40px] text-s24 lg:mb-0 mb-3`} />
      <SubBody text={currency} twStyle={tw`text-secondary`} />
    </div>
  );
}

export default PercentageBox;

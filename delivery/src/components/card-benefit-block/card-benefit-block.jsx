import React from 'react';
import tw from 'twin.macro';

import socialMediaIcons from '@/assets/images/socialMediaIcons.svg';
import CurrencyTable from '@/views/currency-table';

import { SubBody } from '../ui/sub-body/sub-body';
import { SubTitle } from '../ui/sub-title/sub-title';

function CardBenefitBlock({ icon, title, caption }) {
  return (
    <div tw='bg-[#444444] rounded-xl sm:p-5 p-3 flex flex-col gap-2 lg:min-w-[300px] md:min-w-[170px]'>
      {icon}
      <SubTitle text={title} twStyle={tw`xl:text-s18 md:text-s14`} variant={'bold'} />
      <SubBody text={caption} twStyle={tw`text-secondary`} />
      {title === 'Конвертации и переводы' && <CurrencyTable />}
      {title === 'Легко платить' && <img src={socialMediaIcons} alt='social-media icons' tw='max-w-[150px]' />}
    </div>
  );
}

export default CardBenefitBlock;

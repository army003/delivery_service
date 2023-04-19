/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import 'twin.macro';

import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import Light from '@/assets/images/grey-light.svg';
import ChevronDown from '@/assets/images/icons/ChevronDown';
import ChevronUp from '@/assets/images/icons/ChevronUp';
import { DeviceInfoContext } from '@/contexts/device-info-context';
import DepositBenefitsContainer from '@/views/deposite-benefits-container';

import { SubBody } from '../ui/sub-body/sub-body';
import { Title } from '../ui/title/title';
const styles = {
  caption: ({ index, isSoon, activeTab }) => [
    index + 1 === activeTab && tw`text-tertiary`,
    isSoon && tw`text-secondary`,
    tw`leading-6 text-center`
  ],
  title: ({ index, isSoon, activeTab }) => [
    index + 1 === activeTab ? tw`text-[#70FF6E]` : tw`text-secondary`,
    isSoon && tw`text-secondary`,
    tw`leading-8`
  ]
};

function CardBox({ Image, title, isActive, isSoon, caption, index, activeTab, setActiveTab }) {
  const [open, setOpen] = useState(false);
  const { isMobile } = useContext(DeviceInfoContext);

  const navigate = useNavigate();
  const handleNavigateToSteps = () => {
    title === 'Карта инвестора' && navigate('/invest-card/apply');
  };

  return (
    <div
      tw='flex flex-col items-center  p-5 relative'
      onClick={() => {
        index !== 2 && setActiveTab(index + 1);
      }}
      css={[
        isMobile
          ? activeTab === index + 1 && tw`border border-[#2A8640] rounded-2xl`
          : activeTab === index + 1 && tw`border border-[#2A8640] rounded-t-2xl h-[400px] border-b-0 m-0 `,
        activeTab === 1 &&
          !isMobile &&
          index === 0 &&
          tw`before:h-[96%]  before:border-l before:border-b  before:w-[8%] before:border-[#2A8640] before:absolute before:left-[100%] before:bottom-[-0.2%] before:rounded-bl-2xl before:z-30`,
        activeTab === 2 &&
          !isMobile &&
          index === 1 &&
          tw`before:h-[96%]  before:border-l before:border-b  before:w-[8%] before:border-[#2A8640] before:absolute before:left-[100%] before:bottom-[-0.2%] before:rounded-bl-2xl before:z-30`,
        activeTab === 2 &&
          !isMobile &&
          index === 0 &&
          tw`before:h-[96%]  before:border-r before:border-b before:w-[8%] before:border-[#2A8640] before:absolute before:right-[-0.3%] before:bottom-[-0.2%] before:rounded-br-2xl before:z-30`,
        activeTab === 3 &&
          !isMobile &&
          index === 1 &&
          tw`before:h-[96%]  before:border-r before:border-b before:w-[8%] before:border-[#2A8640] before:absolute before:right-[-0.3%] before:bottom-[-0.2%] before:rounded-br-2xl before:z-30`
      ]}
    >
      {/* lg:min-w-[200px] max-w-[250px] md:min-w-[100px] */}
      <img src={Image} alt='card' tw='min-w-[100px] xl:max-w-[250px] sm:max-w-[180px] mb-3' />
      <img src={Light} alt='design light' tw='mb-5' />
      {activeTab === index + 1 && !isMobile && (
        <span
          tw='bg-secondary h-[20px] absolute top-[96%] w-[105%] z-10 ml-[5%]'
          css={[index === 1 && tw` w-[114%] ml-[-1%]`, index === 2 && tw` w-[106%] ml-[-6%]`]}
        ></span>
      )}
      <Title text={title} variant={'bold'} twStyle={styles.title({ index, isSoon, activeTab })} />
      <SubBody text={caption} twStyle={styles.caption({ index, isSoon, activeTab })} />
      {isSoon && (
        <span tw='px-2  rounded-xl border border-grey bg-secondary mt-5 cursor-pointer' onClick={handleNavigateToSteps}>
          <SubBody text={'скоро'} />
        </span>
      )}
      {!isSoon && isMobile && activeTab === index + 1 && (
        <div onClick={() => setOpen(!open)}>{open ? <ChevronUp /> : <ChevronDown />}</div>
      )}
      {open && <DepositBenefitsContainer activeTab={activeTab} />}
      {/* {index === 1 && (
        <span tw='border border-b-[#2A8640] border-l-[#2A8640] border-t-[#282828] border-r-[#282828] rounded-bl-2xl absolute h-[40px] w-[40px] top-[360.5px] right-[267px]'></span>
      )} */}
      {/* {!isMobile && index === 0 && (
        <span tw='h-[5.4%] bottom-[94.7%] right-0 absolute w-[100%] border-r border-[#2A8640] rounded-tr-2xl'></span>
      )}
      {!isMobile && index === 1 && (
        <span tw='h-[96.4%] bottom-0 right-[0.2%] absolute w-[100%] border-l border-b border-[#2A8640] rounded-bl-2xl'></span>
      )}
      {!isMobile && index === 2 && (
        <span tw='bottom-0 right-[30%] absolute w-[95.5%] border-b border-[#2A8640] rounded-bl-2xl'></span>
      )} */}
    </div>
  );
}

export default CardBox;

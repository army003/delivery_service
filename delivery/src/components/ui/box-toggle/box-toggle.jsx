import 'twin.macro';

import React from 'react';
import tw from 'twin.macro';

function BoxToggle({ currentTab, setCurrentTab, options = [], twStyle, isDelivery = false, deliveryReset }) {
  return (
    // <div tw='overflow-hidden border-2 border-green border-solid rounded-xl lg:flex md:flex h-[100px] lg:h-[50px] md:h-[60px] p-0'>
    //   <button
    //     css={[
    //       active
    //         ? tw`w-full lg:h-full md:h-full h-[50%] outline-none`
    //         : tw`bg-green-secondary md:h-full lg:h-full h-[50%] text-white w-full outline-none`
    //     ]}
    //     onClick={() => setActive(!active)}
    //   >
    //     Максимальная ставка ГЭСВ
    //   </button>
    //   <button
    //     css={[
    //       active
    //         ? tw`bg-green-secondary lg:h-full text-white w-full md:h-full  h-[50%] m-0 outline-none`
    //         : tw`w-full lg:h-full md:h-full h-[50%] outline-none`
    //     ]}
    //     onClick={() => setActive(!active)}
    //   >
    //     Минимальная ставка ГЭСВ
    //   </button>
    // </div>
    <div css={[twStyle]}>
      <button
        css={[
          currentTab === 'left'
            ? tw`rounded-t-xl sm:rounded-l-xl sm:rounded-r-none border-2 border-green bg-green-secondary py-2 text-white px-5 sm:w-[50%] w-[100%]`
            : tw`rounded-t-xl sm:rounded-l-xl sm:rounded-r-none border-2 border-green py-2 px-5  sm:w-[50%] w-[100%]`
        ]}
        onClick={() => {
          setCurrentTab('left');
        }}
      >
        {options?.left}
      </button>
      <button
        css={[
          currentTab === 'right'
            ? tw`rounded-b-xl sm:rounded-r-xl sm:rounded-l-none border-2 border-green bg-green-secondary py-2 text-white px-5 w-[100%] sm:w-[50%]`
            : tw`rounded-b-xl sm:rounded-r-xl sm:rounded-l-none border-2 border-green py-2 px-5  sm:w-[50%] w-[100%]`
        ]}
        onClick={() => {
          setCurrentTab('right');
          isDelivery && deliveryReset();
        }}
      >
        {options?.right}
      </button>
    </div>
  );
}

export default BoxToggle;

/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import 'twin.macro';

import React, { useEffect } from 'react';
import { useState } from 'react';
import tw from 'twin.macro';
function Selector({ options, defaultActiveItem = null, setActiveItem }) {
  const [activeTab, setActiveTab] = useState(defaultActiveItem);
  useEffect(() => {
    setActiveItem(activeTab);
  }, [activeTab]);
  return (
    <div tw='flex'>
      {options?.map((item, idx) => (
        <div
          tw='font-bold px-5 py-2 bg-secondary border border-grey min-w-[150px] text-center transition-colors'
          css={[
            activeTab === item?.value &&
              tw`bg-[rgba(129, 0, 139, 0.2)] text-[rgba(129, 0, 139, 1)] border-[rgba(129, 0, 139, 1)]`,
            idx === 0 && tw`rounded-l-lg`,
            idx === options.length - 1 && tw`rounded-r-lg border-r`
          ]}
          onClick={() => setActiveTab(item?.value)}
        >
          {item?.title}
        </div>
      ))}
    </div>
  );
}

export default Selector;

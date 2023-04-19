import 'twin.macro';

import React from 'react';
import tw from 'twin.macro';

import { BigTitle } from '../big-title/big-title';
import { SubTitle } from '../sub-title/sub-title';
function InfoBlock({ title, caption }) {
  return (
    <>
      <div>
        <BigTitle text={title} />
        <SubTitle text={caption} twStyle={tw`text-secondary leading-8 mt-3`} />
      </div>
    </>
  );
}

export default InfoBlock;

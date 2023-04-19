import React from 'react';
import tw from 'twin.macro';

import { ContainerBlock } from '../container-block/container-block';
import { Title } from '../title/title';

function Box({ icon, text }) {
  return (
    <ContainerBlock twStyle={tw`bg-primary rounded-xl`}>
      {icon}
      <Title text={text} twStyle={tw`w-[85%]`} />
    </ContainerBlock>
  );
}

export default Box;

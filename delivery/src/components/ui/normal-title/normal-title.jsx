import 'twin.macro';

import React from 'react';
import tw from 'twin.macro';

const styles = {
  text: ({ twStyle }) => [tw`text-xl font-bold`, twStyle]
};

export const NormalTitle = ({ text, twStyle }) => {
  return <h3 css={styles.text({ twStyle })}>{text}</h3>;
};

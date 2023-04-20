import React from 'react';
import tw from 'twin.macro';

const styles = {
  container: ({ twStyles }) => [tw`max-w-layout w-full mx-auto lg:px-5`, twStyles]
};

export const Wrapper = ({ children, twStyles }) => {
  return <div css={styles.container({ twStyles })}>{children}</div>;
};

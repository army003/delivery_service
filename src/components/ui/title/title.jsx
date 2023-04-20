import React from 'react';
import tw from 'twin.macro';

// TextVariant = 'regular' | 'bold';

const textVariants = {
  bold: tw`font-bold`,
  regular: tw`font-normal`
};

const styles = {
  text: ({ variant = 'regular', twStyle }) => [
    tw`lg:text-[22px] md:text-[20px] text-s16`,
    textVariants[variant],
    twStyle
  ]
};

export const Title = ({ text, variant, twStyle }) => {
  return <h2 css={styles.text({ variant, twStyle })}>{text}</h2>;
};

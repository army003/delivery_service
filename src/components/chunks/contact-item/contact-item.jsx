import 'twin.macro';

import React, { useContext } from 'react';
import tw from 'twin.macro';

import { Caption } from '@/components/ui/caption/caption';
import { DeviceInfoContext } from '@/contexts/device-info-context';

import { BodyText } from '../../ui/body-text/body-text';

const styles = {
  css: ({ twStyle }) => [twStyle]
};
const ContactItem = ({ icon, text, caption, twStyle, link, iconStyle }) => {
  const { isMobile } = useContext(DeviceInfoContext);
  return (
    <div tw='flex gap-2 items-center min-w-min'>
      <div
        tw='sm:w-[32px] sm:h-[32px] h-[28px] w-[28px] flex items-center justify-center bg-primary rounded-full'
        css={[iconStyle]}
      >
        <a href={link}>{icon}</a>
      </div>
      {!isMobile && (
        <div tw='flex flex-col' css={styles.css({ twStyle })}>
          <BodyText text={text} twStyle={tw`text-s14 float-left`} css={styles.css({ twStyle })} />
          {caption && <Caption text={caption} twStyle={tw`text-secondary`} />}
        </div>
      )}
    </div>
  );
};

export { ContactItem };

import 'twin.macro';

import React, { useContext } from 'react';

import ShowIf from '@/components/other/show-if';
import { Breadcrumb } from '@/components/ui/breadcrumb/breadcrumb';
import { PageTitle } from '@/components/ui/page-title/page-title';
import { DeviceInfoContext } from '@/contexts/device-info-context';

export default function PageTemplate({ children, title, backLink, titleButton }) {
  const { isMobile } = useContext(DeviceInfoContext);
  return (
    <main tw={'lg:mt-8 mb-8'}>
      <ShowIf condition={!isMobile}>
        <Breadcrumb />
      </ShowIf>
      <div tw={'pr-4 flex items-center justify-between'}>
        <PageTitle text={title} pathToBack={backLink} />
        <ShowIf condition={!!titleButton}>{titleButton}</ShowIf>
      </div>
      {children}
    </main>
  );
}

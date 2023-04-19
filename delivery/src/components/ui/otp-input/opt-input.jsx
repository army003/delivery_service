import React, { useEffect } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import OtpInputComponent from 'react-otp-input';
import tw from 'twin.macro';

import { Caption } from '@/components/ui/caption/caption';
import { SubBody } from '@/components/ui/sub-body/sub-body';

import { BigTitle } from '../big-title/big-title';
import { BodyText } from '../body-text/body-text';

const OtpInput = ({
  control,
  name,
  label,
  shouldAutoFocus,
  disabled,
  rules,
  handleVerify = () => {},
  numInputs = 4,
  withStart = false,
  bigLabel = false
}) => {
  const { t } = useTranslation();
  const {
    field: { onChange, value },
    fieldState: { error, invalid }
  } = useController({ control, name, rules });

  useEffect(() => {
    if (value?.length === numInputs) {
      handleVerify(value);
    }
  }, [handleVerify, value]);

  return (
    <div css={[tw`flex flex-col space-y-1 items-start`, disabled && tw`opacity-50`]}>
      {label && (
        <label htmlFor={name} tw='text-secondary'>
          {bigLabel ? <BodyText text={label} /> : <SubBody text={label} />}
        </label>
      )}
      <div tw='flex items-center gap-3'>
        {withStart && <BigTitle text={'**** **** ****'} twStyle={tw`font-normal mt-3`} />}
        <OtpInputComponent
          shouldAutoFocus={shouldAutoFocus}
          value={value}
          onChange={onChange}
          hasErrored={invalid}
          isInputNum={true}
          numInputs={numInputs}
          inputStyle={
            numInputs > 4
              ? tw`border border-transparent outline-none text-primary font-bold bg-input sm:w-[50px] sm:h-[60px] w-[35px] h-[45px] sm:mr-2 mr-1 rounded-2xl`
              : tw`border border-transparent outline-none text-primary font-bold bg-input sm:w-[50px] sm:h-[60px] w-[40px] h-[50px] mr-2 rounded-2xl`
          }
          focusStyle={tw`border-input-active`}
          errorStyle={tw`border-input-invalid focus:border-input-invalid`}
        />
      </div>
      {invalid && (
        <span tw='leading-3'>
          <Caption text={error?.message} twStyle={tw`text-error relative right-3`} />
        </span>
      )}
    </div>
  );
};

export { OtpInput };

import './style.css';
import 'react-phone-input-2/lib/high-res.css';
import './style.module.css';

import React from 'react';
import { useState } from 'react';
import { useController } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import ru from 'react-phone-input-2/lang/ru.json';
import tw from 'twin.macro';

import { Caption } from '../caption/caption';
import { SubBody } from '../sub-body/sub-body';

const CountryPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput;

const InternationalPhoneInput = ({
  country = 'KZ',
  control,
  errors,
  setCountryFormatLength,
  setValue = Function.prototype(),
  phone
}) => {
  const [countryCode, setCountryCode] = useState('kz');
  const [error, setError] = useState('');

  const {
    field: { value, onChange, name },
    fieldState: { invalid }
  } = useController({ name: 'mobile_phone', control: control, shouldUnregister: false });

  const onChangeHandler = value => {
    onChange(value);
  };

  const checkValid = (value, country) => {
    console.log('prev', countryCode);
    console.log('now', country.iso2);
    if (countryCode !== country.iso2) {
      setValue('mobile_phone', '');
      setCountryCode(country.iso2);
    }
    let countryFormatLength = '';
    if (country.iso2 === 'ge') {
      countryFormatLength = 15;
    } else {
      countryFormatLength = String(country.format)
        .split(/[-()\s+]+/)
        .join('').length;
    }

    setCountryFormatLength(countryFormatLength);
    if (value.length === countryFormatLength) {
      !value.includes('+') && setValue('mobile_phone', '+' + value);
    }
    if (value.length !== countryFormatLength) {
      setError('Мобильный номер должен состоять из ' + ' ' + countryFormatLength + ' ' + 'цифр');
      return false;
    } else {
      setError('');
      return true;
    }
  };

  return (
    <div>
      <label htmlFor={'phone_input'} tw='ml-s13 text-sm'>
        <SubBody text={<span>Номер моб. телефона</span>} />
      </label>
      <CountryPhoneInput
        control={control}
        id={name}
        name={name}
        country={String(country).toLocaleLowerCase() || 'kz'}
        value={phone}
        localization={ru}
        InputProps={{
          name: name,
          required: true,
          autoFocus: false
        }}
        regions={['ex-ussr']}
        containerStyle={tw`flex font-sans`}
        onCountryChange={value => {}}
        inputStyle={tw`rounded-s14 bg-input outline-none text-primary font-bold placeholder-input
         py-[23px] border border-transparent ml-16 w-[100%] sm:w-auto
        focus:border-input-active disabled:cursor-not-allowed text-s14 pl-5`}
        buttonStyle={tw`h-[48px] w-[58px] border-none bg-input rounded-xl hover:bg-button-hover pl-1`}
        placeholder=''
        dropdownStyle={tw`rounded-md max-h-[150px] bg-primary`}
        buttonClass={'selectButton'}
        onChange={onChangeHandler}
        areaCodes={{ kz: ['7'] }}
        isValid={(value, country) => {
          setError('');
          if (String(value).length > 1) {
            return checkValid(value, country);
          }
        }}
      />

      {(error || errors) && (
        <span tw=''>
          <Caption twStyle={tw`text-error ml-3 mt-1`} text={error || errors?.mobile_phone?.message} />
        </span>
      )}
    </div>
  );
};

export default InternationalPhoneInput;

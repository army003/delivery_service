/* eslint-disable react/display-name */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-undef */
import 'react-datepicker/dist/react-datepicker.css';
import '@/style.css';

import ru from 'date-fns/locale/ru';
import { range } from 'ramda';
import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import tw from 'twin.macro';

import ArrowLeftIcon from '@/assets/images/icons/ArrowLeftIcon';
import ArrowRightIcon from '@/assets/images/icons/ArrowRightIcon';
import { Input2 } from '@/components';

function DatePickerInput({
  startDate,
  setStartDate,
  control,
  disabled,
  name,
  label,
  placeholder,
  setValue,
  dateFrom = 2023,
  dateTo = 2023,
  getValues,
  setTime
}) {
  const years = range(dateFrom, dateTo + 1, 1);
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ];

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button tw='w-full text-left !block' onClick={onClick} ref={ref}>
      <Input2
        label={label}
        name={name}
        control={control}
        rules={{ required: { value: true, message: 'Это поле не может быть пустым' } }}
        placeholder={placeholder}
        twStyle={[getValues(name) && tw`placeholder-shown:font-normal border-[#7d10b4]`]}
        readonly={true}
      />
    </button>
  ));
  //добавить контроллер
  return (
    <>
      <ReactDatePicker
        customInput={<ExampleCustomInput />}
        popperClassName='some-custom-class'
        popperPlacement='top-end'
        locale={ru}
        disabled={disabled}
        showTimeInput
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
              gap: 5,
              borderRadius: '40px'
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <ArrowLeftIcon />
            </button>
            <select
              value={new Date(date).getFullYear()}
              onChange={({ target: { value } }) => {
                changeYear(value);
              }}
              className='year-select'
            >
              {years.map((option, index) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[new Date(date).getMonth()]}
              className='year-select'
              onChange={({ target: { value } }) => {
                changeMonth(months.indexOf(value));
              }}
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <ArrowRightIcon />
            </button>
          </div>
        )}
        selected={startDate}
        onChange={date => {
          setStartDate(date);
          setTime(String(date).split(' ')[4]);
          setValue(name, new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0]);
        }}
      />
    </>
  );
}

export default DatePickerInput;

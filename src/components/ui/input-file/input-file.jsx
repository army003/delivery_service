import 'twin.macro';

import React from 'react';
import tw from 'twin.macro';

import DeleteIcon from '@/assets/images/icons/DeleteIcon';
import EntypoAttachment from '@/assets/images/icons/EntypoAttachment';
import { SubBody } from '@/components/ui/sub-body/sub-body';

const InputFile = ({ text = 'Загрузить документ', name, onChange, disabled, file, onDelete }) => {
  const handleUpload = e => {
    e.preventDefault();
    onDelete();
  };

  return (
    <label tw='flex gap-3 items-center sm:py-4 py-2 sm:px-5 px-3 max-w-max min-w-button w-full border-2 border-[#4f9d3a] border-dashed rounded-s14 shadow-md'>
      <input type='file' name={name} onChange={onChange} accept='.pdf, .jpg, .jpeg' disabled={disabled} tw={'hidden'} />
      {file && !disabled ? (
        <div onKeyDown={handleUpload} onClick={handleUpload} aria-hidden='true' tw='cursor-pointer'>
          <DeleteIcon />
        </div>
      ) : (
        !disabled && <EntypoAttachment tw='text-green-secondary' />
      )}
      <SubBody
        text={file ? String(file.name).substring(0, 25) + '...' : text}
        twStyle={tw`max-w-full text-sm text-green-secondary`}
      />
    </label>
  );
};

export { InputFile };

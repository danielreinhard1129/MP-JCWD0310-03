'use client';

import { FormikHandlers } from 'formik';
import React, { HTMLInputTypeAttribute } from 'react';

interface FormInputProps {
  name: string;
  label?: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  handleChange: FormikHandlers['handleChange'];
  handleBlur: FormikHandlers['handleBlur'];
  value: string;
  isError: boolean;
  error: string | undefined;
  className: string;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  type,
  value,
  isError,
  error,
  handleChange,
  handleBlur,
  className,
}) => {
  return (
    <div className="flex flex-col space-y-1.5 border border-black">
      <label htmlFor={name} className={isError ? 'text-red-500' : 'text-black'}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        className={isError ? 'border-red-500' : ''}
      />
      {isError ? <div className="text-xs text-red-500">{error}</div> : null}
    </div>
  );
};

export default FormInput;

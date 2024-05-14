'use client';
import React from 'react';

import { Label } from '../ui/label';
import { Input } from '../ui/input';

import { HTMLInputTypeAttribute } from 'react';
import { FormikHandlers } from 'formik';

interface FormInputProps {
  name: string;
  placeholder: string;
  label: string;
  type: HTMLInputTypeAttribute;
  value: string | Date | number;
  isError: boolean;
  error: string | undefined;
  handleChange: FormikHandlers['handleChange'];
  handleBlur: FormikHandlers['handleBlur'];
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  label,
  type = 'text',
  handleChange,
  handleBlur,
  value,
  isError,
  error,
}) => {
  const displayValue =
    typeof value === 'object' && value instanceof Date
      ? value.toISOString() // Jika tipe data adalah Date, ubah menjadi string format tanggal
      : value; // Jika bukan tipe data Date, biarkan nilai tetap sama
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name} className={isError ? 'text-red-500' : ''}>
        {label}
      </Label>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={displayValue}
      />
      {isError ? <div className="text-xs text-red-500">{error}</div> : null}
    </div>
  );
};

export default FormInput;

import React, { HTMLInputTypeAttribute } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { FormikHandlers } from 'formik';

interface FormInputProps {
  labelName: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  value: string;
  isError: boolean;
  error: string | undefined;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  error,
  isError,
  onChange,
  onBlur,
  type,
  value,
  labelName,
}) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name} className={isError ? 'text-red-500' : ''}>
        {labelName}
      </Label>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className="bg-[#18181A] border border-b gray-700"
      />
      {isError ? <div className="text-xs text-red-500">{error}</div> : null}
    </div>
  );
};

export default FormInput;

import React from 'react';
import sass from './sass.module.scss';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const DefaultInput: React.FC<DefaultInputProps> = ({
  id,
  labelText,
  type,
  ...rest
}) => {
  return (
    <div className={sass.defaultInput}>
      <label htmlFor={id} className={sass.label}>
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        className={sass.input}
        {...rest} // Inclui value, onChange, required, placeholder etc.
      />
    </div>
  );
};

export default DefaultInput;

import { ComponentPropsWithoutRef } from 'react';

import styles from './Input.module.css';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className={styles.input_field}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} />
    </div>
  );
};

import React, { ReactNode } from 'react';

import styles from './Form.module.css';

type FormProps = {
  children: ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

type FormInputSectionProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Form = ({ children, ...props }: FormProps) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
};

export const FormInputSection = ({ children, ...props }: FormInputSectionProps) => {
  return (
    <section className={styles.section} {...props}>
      {children}
    </section>
  );
};

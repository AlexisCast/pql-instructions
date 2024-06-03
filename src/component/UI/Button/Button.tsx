import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(styles.Button, className, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary'
      })}
      {...props}>
      {children}
    </button>
  );
};

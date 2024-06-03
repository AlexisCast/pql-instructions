import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './PageLayout.module.css';

type PageLayoutProps = {
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const PageLayout = ({ className, children, ...props }: PageLayoutProps) => {
  return (
    <div className={classNames(styles.container, className)} {...props}>
      {children}
    </div>
  );
};

export default PageLayout;

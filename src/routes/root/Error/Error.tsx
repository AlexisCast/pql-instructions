import { useRouteError } from 'react-router-dom';

import styles from './Error.module.css';
import SideBar from '../../../component/SideBar/SideBar';

type ErrorProps = {
  statusText?: string;
  message?: string;
};

const Error = () => {
  const { statusText, message }: ErrorProps = useRouteError() ?? {};

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.errorPage}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{statusText || message}</i>
        </p>
      </div>
    </div>
  );
};

export default Error;

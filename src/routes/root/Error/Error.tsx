import { useRouteError } from 'react-router-dom';

import styles from './Error.module.css';

type ErrorProps = {
  statusText?: string;
  message?: string;
};

const Error = () => {
  const { statusText, message }: ErrorProps = useRouteError() ?? {};

  return (
    <div className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
};

export default Error;

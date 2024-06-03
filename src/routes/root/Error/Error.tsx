import { useRouteError } from 'react-router-dom';

import styles from './Error.module.css';
import SideBar from '../../../component/Navigation/SideBar/SideBar';

type ErrorProps = {
  status?: number;
  statusText?: string;
  message?: string;
  data?: {
    message?: string;
  };
};

const Error = () => {
  const error = useRouteError() as ErrorProps;

  let message = 'Something went wrong!';

  if (error?.status === 500 && error?.data?.message) {
    message = error.data.message;
  }

  if (error?.status === 404) {
    message = 'Could not find resource or page';
  }

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.errorPage}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{message}</i>
        </p>
      </div>
    </div>
  );
};

export default Error;

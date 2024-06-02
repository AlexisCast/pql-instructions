import { Outlet } from 'react-router-dom';

import SideBar from '../../../component/SideBar/SideBar';

import styles from './Root.module.css';

const RootLayout = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

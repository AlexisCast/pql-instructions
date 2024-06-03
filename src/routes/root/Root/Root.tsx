import { Outlet } from 'react-router-dom';

import SideBar from '../../../component/SideBar/SideBar';

import styles from './Root.module.css';
import PageLayout from '../../../component/shared/Layouts/PageLayout/PageLayout';

const RootLayout = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.main}>
        <PageLayout>
          <Outlet />
        </PageLayout>
      </main>
    </div>
  );
};

export default RootLayout;

import { Outlet } from 'react-router-dom';

import SideBar from '../../../component/Navigation/SideBar/SideBar';

import styles from './Root.module.css';
import PageLayout from '../../../component/shared/Layouts/PageLayout/PageLayout';
import MainNavigation from '../../../component/Navigation/MainNavigation/MainNavigation';

const RootLayout = () => {
  return (
    <div className={styles.container}>
      {/* <SideBar /> */}
      <MainNavigation />
      <main className={styles.main}>
        <PageLayout>
          <Outlet />
        </PageLayout>
      </main>
    </div>
  );
};

export default RootLayout;

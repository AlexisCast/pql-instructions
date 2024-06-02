import { Link, Outlet } from 'react-router-dom';

import styles from './Root.module.css';

const RootLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/teamIncantation">Team Incantation</Link>
          <Link to="/teams">Teams</Link>
        </nav>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

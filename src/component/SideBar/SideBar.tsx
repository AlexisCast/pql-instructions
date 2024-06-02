import { Link } from 'react-router-dom';

import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/teamIncantation">Team Incantation</Link>
        <Link to="/teams">Teams</Link>
      </nav>
    </div>
  );
};

export default SideBar;
import { useSelector, useDispatch } from 'react-redux';

import SideBar from '../SideBar/SideBar';
import Portal from '../../UI/Portal/Portal';

import { uiActions } from '../../../store/ui-slice';

import styles from './MobileNavBar.module.css';
import { Link } from 'react-router-dom';

const MobileNavBar = () => {
  const dispatch = useDispatch();

  const drawerIsVisible = useSelector((state) => state.ui.drawerIsVisible);

  const handleOnclick = () => {
    dispatch(uiActions.openDrawer());
  };

  const toggleDrawer = () => {
    dispatch(uiActions.closeDrawer());
  };

  return (
    <>
      <div className={styles.nav}>
        <h2>PQL</h2>
        <button onClick={handleOnclick}>Icon</button>
      </div>

      <Portal isOpen={drawerIsVisible} onClose={toggleDrawer}>
        {/* TODO: need to update SideBar for mobile */}
        {/* <SideBar /> */}
        <aside className={styles.sidebar}>
          <header>
            <button onClick={toggleDrawer}>Icon</button>
          </header>
          <nav className={styles.nav_items}>
            <Link to="/" onClick={toggleDrawer}>
              Home
            </Link>
            <Link to="/teamIncantation" onClick={toggleDrawer}>
              Team Incantation
            </Link>
            <Link to="/teams" onClick={toggleDrawer}>
              Teams
            </Link>
          </nav>
        </aside>
      </Portal>
    </>
  );
};

export default MobileNavBar;

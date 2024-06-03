import { useEffect, useState } from 'react';

import SideBar from '../SideBar/SideBar';
import MobileNavBar from '../MobileNavBar/MobileNavBar';

// import DesktopNavBar from '../DesktopNavBar/DesktopNavBar';
// import MobileNavBar from '../MobileNavBar/MobileNavBar';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};

const MainNavigation = () => {
  const windowWidth = useWindowWidth();
  const windowIsWide = windowWidth > 1200;

  return <header>{windowIsWide ? <SideBar /> : <MobileNavBar />}</header>;
};

export default MainNavigation;

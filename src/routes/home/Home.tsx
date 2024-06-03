import logo from '../../assets/pql_logo.jpeg';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Premier Quidditch League!</h1>
      <div className={styles.image_container}>
        <img src={logo} className={styles.image} alt="logo" />
      </div>
    </div>
  );
};

export default Home;

import { Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import Header from "@components/header/Header";

const Layout = () => {
  return (
    <div className={styles.LayoutContainer}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

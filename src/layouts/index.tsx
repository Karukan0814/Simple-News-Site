import styles from "./index.module.scss";
import Header from "../components/header/";

type LayoutProps = {
  children: React.ReactNode;
};
function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default MainLayout;

import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

function Header() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__icon}>
          <Image
            src="/img/headerIcon/menu.png"
            alt="menu"
            loading="eager"
            width={35}
            height={35}
            priority
          />
        </div>

        <h1>
          <Link href="/">
            <span>Simple News</span>
          </Link>
        </h1>
      </header>
    </section>
  );
}

export default Header;

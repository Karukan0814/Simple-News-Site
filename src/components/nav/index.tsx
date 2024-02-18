import Link from "next/link";
import Image from "next/image";

import styles from "./index.module.scss";

const TOPICS = [
  {
    icon: "01",
    path: "/",
    title: "Top stories",
  },
  {
    icon: "03",
    path: "/topics/business",
    title: "Business",
  },
  {
    icon: "04",
    path: "/topics/technology",
    title: "Technology",
  },
  {
    icon: "05",
    path: "/topics/entertainment",
    title: "Entertainment",
  },
  {
    icon: "06",
    path: "/topics/sports",
    title: "Sports",
  },
];

export const Nav = () => {
  return (
    <section className={styles.nav_container}>
      <ul>
        {TOPICS.map((topic, index) => {
          return (
            <li key={index}>
              <Link href={`${topic.path}`}>
                <div>
                  <Image
                    src={`/img/navIcons/${topic.icon}.png`}
                    alt={`${topic.title} image`}
                    height={30}
                    width={30}
                  />

                  <span>{topic.title}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

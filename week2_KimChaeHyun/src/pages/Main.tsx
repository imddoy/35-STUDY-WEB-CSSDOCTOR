import React from "react";
import styles from "./Main.module.css";
import Story from "@components/story/Story";
import Feed from "@components/feed/Feed";
import Recommend from "@components/recommend/Recommend";

const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.mainWrapper}>
        <Story />
        <Feed />
      </section>
      <Recommend />
    </main>
  );
};

export default Main;

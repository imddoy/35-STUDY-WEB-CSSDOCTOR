import React from "react";
import styles from "./Feed.module.css";
import { IcComment, IcKeep, IcLike, IcMore, IcShare } from "@assets/svgs";
import user from "@assets/profile.png";

export interface FeedProps {
  profileImg: string;
  username: string;
  postImg: string;
  caption: string;
  likes: string;
  time: string;
  comments: string;
}

const Feed = ({ profileImg, username, postImg, caption, likes, time, comments }: FeedProps) => {
  return (
    <div className={styles.feed}>
      <div className={styles.header}>
        <img src={profileImg} alt={`${username}'s profile`} className={styles.profileImg} />
        <p className={styles.username}>
          {username} <span>• {time}</span>
        </p>
        <IcMore className={styles.iconHover} />
      </div>
      <img src={postImg} alt="Post" className={styles.postImg} />
      <div className={styles.actions}>
        <div className={styles.actionButtons}>
          <IcLike className={styles.iconHover} />
          <IcComment className={styles.iconHover} />
          <IcShare className={styles.iconHover} />
        </div>
        <IcKeep className={styles.iconHover} />
      </div>
      <div className={styles.details}>
        <span className={styles.likes}>
          <img src={user} width={20} />
          좋아요 {likes}
        </span>
        <span className={styles.caption}>
          <strong>{username}</strong> {caption}
        </span>
        <button className={styles.moreCaption}>... 더 보기</button>
        <button className={styles.comments}>{comments}</button>
      </div>
    </div>
  );
};

export default Feed;

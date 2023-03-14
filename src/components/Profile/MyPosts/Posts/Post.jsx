import React from 'react';
import styles from './Post.module.css';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';

function Post({ message, ava }) {
  return (
    <div className={styles.item}>
      {ava ? <img src={ava} alt="ava" /> : <img src={DefaultAva} alt="DefaultAva" />}
      <span className={styles.description}>
        {message}
      </span>
    </div>
  );
}
export default Post;

import React from 'react';
import { getDate } from '../../../../utils/getDate.js';
import styles from './Post.module.css';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';

function Post({
  message, firstName, lastName, createdAt,
}) {
  return (
    <div className={styles.item}>
      <img src={DefaultAva} alt="DefaultAva" />
      <span className={styles.name}>
        {`${firstName} ${lastName}`}
      </span>
      <span className={styles.date}>
        {`${getDate(createdAt)}`}
      </span>
      <span className={styles.description}>
        {message }
      </span>
    </div>
  );
}
export default Post;

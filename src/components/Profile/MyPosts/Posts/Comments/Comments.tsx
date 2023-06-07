import React from 'react';
import { ICommentItem } from '../../../../../store/slices/interfaces/postInterface';
import styles from './Comments.module.css';
import DefaultAva from '../../../../../assets/images/DefaultAva.webp';

interface ICommentsProps {
  comments: ICommentItem[],
}
const Comments: React.FC<ICommentsProps> = ({
  comments,
}) => (
  <div className={styles.container}>
    {comments.map((comment) => (
      <div key={comment.id} className={styles['container-message']}>
        <img src={DefaultAva} alt="DefaultAva" className={styles.ava} />
        <div className={styles.name}>Who?</div>
        <div className={styles.message}>{comment.attributes.message}</div>
      </div>
    ))}
  </div>
);
export default Comments;

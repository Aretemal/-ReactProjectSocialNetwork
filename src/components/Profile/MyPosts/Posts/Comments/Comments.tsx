import React from 'react';
import { IComment } from '../../../../../store/slices/interfaces/postInterface';
import styles from './Comments.module.css';
import DefaultAva from '../../../../../assets/images/DefaultAva.webp';
import { IUserItem } from '../../../../../store/slices/interfaces/dialogInterface';

interface ICommentsProps {
  comments: IComment[],
  senders: IUserItem[],
}
const Comments: React.FC<ICommentsProps> = ({
  comments, senders,
}) => (
  <div className={styles.container}>
    {comments.map((comment) => {
      const sender = senders.find((user) => +user.id === +comment.attributes.senderCommentId);
      return (
        <div key={comment.id} className={styles['container-message']}>
          <img src={DefaultAva} alt="DefaultAva" className={styles.ava} />
          <div className={styles.name}>{`${sender?.attributes.firstName} ${sender?.attributes.lastName}`}</div>
          <div className={styles.message}>{comment.attributes.message}</div>
        </div>
      );
    })}
  </div>
);
export default Comments;

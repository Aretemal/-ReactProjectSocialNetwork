import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './MyPosts.module.css';
import DefaultAva from '../../../assets/images/DefaultAva.webp';
import SendPost from '../../../assets/images/icons/SendPost.png';
import PostContainer from './Posts/PostContainer';
import { IPost } from '../../../store/slices/interfaces/postInterface';

export interface IMyPostsProps {
  isAuthProfile: boolean,
  posts: IPost[],
  onAddPost: (a: string) => void, // eslint-disable-line no-unused-vars
  t: (a: string) => any, // eslint-disable-line no-unused-vars
}
const MyPosts: React.FC<IMyPostsProps> = ({
  posts, onAddPost, t, isAuthProfile,
}) => {
  const postsElements = posts
    .map((post) => (
      <PostContainer
        key={post.id}
        id={post.id}
        message={post.attributes.content}
        isMeLike={post.attributes.isMeLike}
        likesCount={post.attributes.likesCount}
        commentCount={post.attributes.commentCount}
        createdAt={post.attributes.createdAt}
      />
    )).reverse();
  return (
    <div className={styles.container}>
      {isAuthProfile ? (
        <Formik
          initialValues={{
            newMessageText: '',
          }}
          onSubmit={(values, { resetForm }) => {
            onAddPost(values.newMessageText);
            resetForm();
          }}
        >
          {() => (
            <Form className={styles.form}>
              <img className={styles.ava} src={DefaultAva} alt="DefaultAva" />
              <Field
                className={styles.field}
                name="newMessageText"
                type="textarea"
                as="textarea"
                placeholder={`${t('Enter text ...')}`}
              />
              <button
                className={styles.but}
                type="submit"
              >
                <img
                  className={styles['send-icon']}
                  src={SendPost}
                  alt='send'
                />
              </button>
            </Form>
          )}
        </Formik>
      ) : null}
      <div>
        {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;

import React from 'react';
import { Field, Form, Formik } from 'formik';
import styles from './UpdateForm.module.css';
import GalIcon from '../../../../../assets/images/icons/GalIcon.png';

interface IUpdateFormProps{
  t: (a: string) => any, // eslint-disable-line no-unused-vars
  message: string,
  id: string,
  onUpdatePost: ({ postsId, content }: // eslint-disable-line no-unused-vars
    { postsId: string, content: string }) => void,
}
const UpdateForm: React.FC<IUpdateFormProps> = ({
  onUpdatePost, id, t, message,
}) => (
  <Formik
    initialValues={{
      content: message,
    }}
    onSubmit={(values, { resetForm }) => {
      onUpdatePost({ content: values.content, postsId: id });
      resetForm();
    }}
  >
    {() => (
      <Form className={styles.form}>
        <Field
          className={styles.field}
          name="content"
          type="textarea"
          as="textarea"
          placeholder={t('Enter text ...')}
        />
        <button
          className={styles.but}
          type="submit"
        >
          <img
            className={styles['send-icon']}
            src={GalIcon}
            alt='GalIcon'
          />
        </button>
      </Form>
    )}
  </Formik>
);
export default UpdateForm;

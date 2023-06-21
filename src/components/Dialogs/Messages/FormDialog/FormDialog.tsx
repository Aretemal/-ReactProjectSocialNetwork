import { Field, Form, Formik } from 'formik';
import React from 'react';
import MessageSchema from '../../../../utils/validators/MessageSchema';
import styles from './FormDialog.module.css';
import IconSend from '../../../../assets/images/icons/IconSend.png';

interface IProps {
  onSendMessage: (message: string, id: string) => void, // eslint-disable-line no-unused-vars
  t: (a: string) => any, // eslint-disable-line no-unused-vars
  activeId: string,
}
const FormDialog: React.FC<IProps> = ({
  onSendMessage,
  activeId,
  t,
}) => (
  <Formik
    initialValues={{ message: '' }}
    onSubmit={(values, { resetForm }) => {
      onSendMessage(values.message, activeId);
      resetForm();
    }}
    validationSchema={MessageSchema}
  >
    {({
      errors,
      touched,
    }) => (
      <Form className={styles['block-form']}>
        <Field
          as="textarea"
          className={styles['block-form_input']}
          name="message"
          placeholder={t('Enter text ...')}
        />
        <button
          disabled={!!(errors.message && touched.message)}
          className={styles['block-form_button']}
          type='submit'
        >
          <img className={styles['block-form_icon']} src={IconSend} alt="Icon for send message" />
        </button>
      </Form>
    )}
  </Formik>
);

export default FormDialog;

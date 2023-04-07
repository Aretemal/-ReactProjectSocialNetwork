import React from 'react';
import { Formik, Form, Field } from 'formik';
import LockIcon from '../../assets/images/icons/LockIcon.png';
import UserIcon from '../../assets/images/icons/UserIcon.png';
import EmailIcon from '../../assets/images/icons/EmailIcon.png';
import NameIcon from '../../assets/images/icons/NameIcon.png';
import styles from './Registration.module.css';

export function Registration({ registration }) {
  return (
    <div>
      <div className={styles.block} />
      <div className={styles.registration}>
        <Formik
          initialValues={{
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={(values) => {
            registration(values.userName, values.password, values.firstName, values.lastName, values.email);
          }}
        >
          {() => (
            <Form className={styles.formik}>
              <h1 className={styles.name}>Registration</h1>
              <div className={styles.itemField}>
                <img className={styles.UserIcon} src={UserIcon} alt="UserIcon" />
                <Field
                  className={styles.field}
                  name="userName"
                  placeholder='Your login'
                />
              </div>
              <div className={styles.itemField}>
                <img className={styles.LockIcon} src={LockIcon} alt="LockIcon" />
                <Field
                  className={styles.field}
                  name="password"
                  type="password"
                  placeholder="Your password"
                />
              </div>
              <div className={styles.itemField}>
                <img className={styles.NameIcon} src={NameIcon} alt="NameIcon" />
                <Field
                  className={styles.field}
                  name="firstName"
                  placeholder="First Name"
                />
                <Field
                  className={`${styles.field} + ${styles.reds}`}
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
              <div className={styles.itemField}>
                <img className={styles.EmailIcon} src={EmailIcon} alt="EmailIcon" />
                <Field
                  className={styles.field}
                  name="email"
                  placeholder="Email"
                />
              </div>
              <button
                className={styles.but}
                type="submit"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

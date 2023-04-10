import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import LockIcon from '../../assets/images/icons/LockIcon.png';
import UserIcon from '../../assets/images/icons/UserIcon.png';
import EmailIcon from '../../assets/images/icons/EmailIcon.png';
import NameIcon from '../../assets/images/icons/NameIcon.png';
import styles from './Registration.module.css';

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  firstName: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .email('This field should be email!'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
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
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            registration(values.userName, values.password, values.firstName, values.lastName, values.email);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.formik}>
              <h1 className={styles.name}>Registration</h1>
              <div className={styles.itemField}>
                <img className={styles.UserIcon} src={UserIcon} alt="UserIcon" />
                <Field
                  className={styles.field}
                  name="userName"
                  placeholder='Your login'
                />
                {errors.userName && touched.userName ? (
                  <div className={styles.error}>{errors.userName}</div>
                ) : null}
              </div>
              <div className={styles.itemField}>
                <img className={styles.LockIcon} src={LockIcon} alt="LockIcon" />
                <Field
                  className={styles.field}
                  name="password"
                  type="password"
                  placeholder="Your password"
                />
                {errors.password && touched.password ? (
                  <div className={styles.error}>{errors.password}</div>
                ) : null}
              </div>
              <div className={styles.itemField}>
                <img className={styles.NameIcon} src={NameIcon} alt="NameIcon" />
                <Field
                  className={styles.field}
                  name="firstName"
                  placeholder="First Name"
                />
                {errors.firstName && touched.firstName ? (
                  <div className={styles.error}>{errors.firstName}</div>
                ) : null}
              </div>
              <div className={styles.itemField}>
                <img className={styles.NameIcon} src={NameIcon} alt="NameIcon" />
                <Field
                  className={`${styles.field} + ${styles.reds}`}
                  name="lastName"
                  placeholder="Last Name"
                />
                {errors.lastName && touched.lastName ? (
                  <div className={styles.error}>{errors.lastName}</div>
                ) : null}
              </div>
              <div className={styles.itemField}>
                <img className={styles.EmailIcon} src={EmailIcon} alt="EmailIcon" />
                <Field
                  className={styles.field}
                  name="email"
                  placeholder="Email"
                />
                {errors.email && touched.email ? (
                  <div className={styles.error}>{errors.email}</div>
                ) : null}
              </div>
              <button
                disabled={
                (
                  (errors.userName && touched.userName)
                  || (errors.password && touched.password)
                  || (errors.email && touched.email)
                  || (errors.firstName && touched.firstName)
                  || (errors.lastName && touched.lastName)
                )
              }
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

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import connectNameForClasses from 'classnames';
import styles from './DialogUserBoot.module.css';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';

export function DialogUserBoot({
  id, name, ava, selectDialogs,
}) {
  const defaultStyle = 'd-flex flex-row w-100 align-items-center';
  const imageAva = ava || DefaultAva;
  return (
    <div
      className={connectNameForClasses(defaultStyle, styles.container)}
      onClick={() => {
        selectDialogs(id);
      }}
    >
      <img className={styles.ava} src={imageAva} alt="AVA" />
      <span className='ms-3 fs-5 text-dark'>
        {`${name}`}
      </span>
    </div>
  );
}

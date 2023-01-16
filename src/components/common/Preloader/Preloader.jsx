import React from 'react';
import classes from './Preloader.module.css';
import preloader from '../../../assets/images/preloader.svg';

function Preloader() {
  return <img alt='1' className={classes.preloader} src={preloader} />;
}

export default Preloader;

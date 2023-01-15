import classes from './Preloader.module.css';
import React from 'react';
import preloader from '../../../assets/images/preloader.svg';


const Preloader = (props) =>{
  return <img className={classes.preloader} src={preloader} />;
};

export default Preloader;

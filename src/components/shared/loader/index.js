import React from 'react';

import BrandLogo from '../brand';

import styles from './loader.module.scss';

import ProgressBar from '../../atoms/progressbar';

function Loader() {
  return (
    <article className={styles.container}>
        <BrandLogo/>  
        <ProgressBar/>

        </article>
  );
}
export default Loader;
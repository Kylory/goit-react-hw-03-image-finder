import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

export default class Spinner extends React.Component {
  render() {
    return (
      <Loader
        className={styles.Loader}
        type="Circles"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}

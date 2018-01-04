import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Styles from './Main.css';

import Card from '../Card/Card';

const jumbotron = () => {
  return (
    <Jumbotron className={Styles.canvas}>
        <Card />
    </Jumbotron>
  );
}

export default jumbotron;

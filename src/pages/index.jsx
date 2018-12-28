import React from 'react';
import { Link } from "gatsby";

import Header from '../components/Header';
import Styles from '../assets/styles/index.module.styl';

const App = () => (
  <div>
    <div className={Styles.banner}>
      <div className={Styles.logo}></div>
      <h1>Welcome to React</h1>
    </div>

    <Header headerText="Home" />

    <p className={Styles.blockContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime deserunt ducimus veritatis, error iure perspiciatis sint velit fugit! Officia laborum tempora expedita earum totam tempore quaerat atque laudantium aperiam voluptate!</p>
    <Link to="/about/">about</Link>
  </div>
);

export default App;

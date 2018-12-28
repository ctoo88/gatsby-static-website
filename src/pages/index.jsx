import React from 'react';

import Header from '../components/Header';
import Styles from '../assets/styles/index.module.styl';

const App = () => (
  <div>
    <Header curPage="home" />

    <div className={Styles.banner}>
      <h1 className={Styles.title}>Home</h1>
      <p className={Styles.content}>A static content-oriented website built with Gatsby.</p>
    </div>

    <div className={Styles.content}>Home Page</div>
  </div>
);

export default App;

import React from 'react';

import Header from '../components/Header';
import Styles from '../assets/styles/index.module.styl';

const About = () => (
  <div>
    <Header curPage="about" />

    <div className={Styles.banner}>
      <h1 className={Styles.title}>About</h1>
      <p className={Styles.content}>A static content-oriented website built with Gatsby.</p>
    </div>

    <div className={Styles.content}>About Page</div>
  </div>
);

export default About;

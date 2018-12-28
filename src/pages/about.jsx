import React from 'react';
import { Link } from "gatsby";

import Header from '../components/Header';
import Styles from '../assets/styles/index.module.styl';


const About = () => (
  <div>
    <Header headerText="About" />

    <p className={Styles.blockContent}>page about</p>
    <Link to="/">home</Link>
  </div>
);

export default About;

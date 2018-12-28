import React from "react";
import { Link } from "gatsby";

import Styles from '../assets/styles/index.module.styl';

const Header = (props) => (
  <div className={Styles.header}>
    <i className={Styles.logo}></i>
    <div className={Styles.nav}>
      <Link className={props.curPage === 'home' ? Styles.navLinkActive : Styles.navLink} to="/">Home</Link>
      <Link className={props.curPage === 'about' ? Styles.navLinkActive : Styles.navLink} to="/about/">About</Link>
    </div>
  </div>
);

export default Header;

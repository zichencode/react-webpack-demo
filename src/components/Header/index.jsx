/**
 * 公共头部组件
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './index.less';

const Header = () => (
  <header>
    <div className={styles.logoBox}>
      <NavLink className={styles.logo} to="/">logo</NavLink>
    </div>
    <nav>
      <NavLink activeClassName={styles.active} to="/index">首页</NavLink>
      <NavLink activeClassName={styles.active} to="/my">我的</NavLink>
    </nav>
    <div className={classNames(styles.user, styles.logo)}>
      刘亚亚
    </div>
  </header>
);

export default Header;

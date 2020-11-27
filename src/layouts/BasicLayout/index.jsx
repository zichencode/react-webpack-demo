/**
 * 内容模版页
 */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './index.less';

const BasicLayout = (props) => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]),
};
BasicLayout.defaultProps = {
  children: {},
};

export default BasicLayout;

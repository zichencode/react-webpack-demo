/**
 * 内容模版页
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './index.less';

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(arguments,);
  return {dispatch}
}

const BasicLayout = (props) => {
  console.log(props, 'layout');
  const { children } = props;
  return (
    <div className={styles.layout}>
      <Header {...props} />
      <div className={styles.main}>
        {children}
      </div>
      <Footer {...props} />
    </div>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]),
};
BasicLayout.defaultProps = {
  children: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => <BasicLayout {...props} />);

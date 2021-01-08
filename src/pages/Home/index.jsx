import React, { useState, useEffect } from 'react';
// useState,
// import { useHistory } from 'react-router-dom';
import styles from './index.less';

export default (props) => {
  // const history = useHistory();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(props);
  });
  const click = () => {
    setCount(count + 1);
    history.push('/my');
  };
  return (
    <div className={styles.list}>
      <ul>
        {[1, 2].map((item) => (
          <li className={styles.lis} key={item}>
            <div className={styles.left}>
              图像
            </div>
            <div className={styles.right}>
              <h3>这是标题</h3>
              <div className={styles.con}>
                这是内容。。。XXXX123
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

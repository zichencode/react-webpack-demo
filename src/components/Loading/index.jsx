import React from 'react';

export default (props) => {
  console.log(props, 'loading');
  return (
    <div className="loading">
      加载中...
    </div>
  );
};

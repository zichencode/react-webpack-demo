import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './stores/index';

import App from './routers/index';
import '@/commons/style/base.less';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
                            
                            
                            
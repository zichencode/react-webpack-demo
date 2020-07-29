/*
 * @Description: 这是路由组件
 * @Author: 刘亚亚
 * @Date: 2020-06-08 19:42:12
 * @LastEditTime: 2020-06-09 11:59:07
 * @LastEditors: 刘亚亚
 */
import React from 'react';

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import NotFound from '@/components/NotFound/404';
import Index from '../pages/index';
import Cateagy from '../pages/cateagy';
import My from '../pages/my';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/cateagy">标签</Link>
          </li>
          <li>
            <Link to="/user">我的</Link>
          </li>
          <li>
            <Link to="/userq">我的eeewsw1</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/cateagy" component={Cateagy} />
        <Route path="/user" component={My} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

/*
 * @Description: 这是路由组件
 * @Author: 刘亚亚
 * @Date: 2020-06-08 19:42:12
 * @LastEditTime: 2020-06-09 11:59:07
 * @LastEditors: 刘亚亚
 */
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  Redirect,
} from 'react-router-dom';
// 获取路由的配置
import Loading from '@/components/Loading';
import routerConfig from './config';

const renderRoute = (routes) => {
  if (!Array.isArray(routes)) {
    return null;
  }
  return (
    <Switch>
      {
        routes.map((route, index) => {
          if (route.redirect) {
            // 有无重定向
            return (
              <Redirect
                key={route.path || index}
                exact={route.exact}
                strict={route.strict}
                from={route.path}
                to={route.redirect}
              />
            );
          }
          // 无重定向时
          return (
            <Route
              key={route.path || index}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={() => {
                const renderChildRoutes = renderRoute(route.children);
                if (route.component) {
                  return (
                    <Suspense fallback={<Loading />}>
                      <route.component route={route}>{renderChildRoutes}</route.component>
                    </Suspense>
                  );
                }
                return renderChildRoutes;
              }}
            />
          );
        })
      }
    </Switch>
  );
};
const AppRouter = () => (
  <Router>
    {renderRoute(routerConfig)}
    {/* <Route exact path="/loading" component="Loading"></Route> */}
  </Router>
);
export default AppRouter;

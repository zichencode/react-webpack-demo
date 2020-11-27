
1. 问题一
  Q: Module not found: Error: Can't resolve '@/components/Loading'?
  A: 解析不到，需要配置 webpack中 extensions 参数为 ['', 'js', 'jsx']


2. 问题二
  Q: 配置了 alias ，但是 eslint 报错“不能解析这个导出”。Unable to resolve path to module '' import/no-unresolved
  A: 1. 修改`eslint` 中 配置参数 `rules` 添加 
  ```javascript
  "import/no-unresolved": [
    2, {
      "ignore": ["^@/"]
    }
  ]
  ```
  2. 首先安装 `yarn add eslint-import-resolver-webpack --dev`, 然后编辑 `.eslintrc` 文件
   ```javascript
  {
    "settings": {
      "webpack": {
        "config": "build/webpack.base.js" // 这是你设置alias的配置文件路径
      }
    }
  }
   ```

  3. react-router 中使用`BrowserRouter` 时，刷新页面会 出现 Cannot GET /；
     1. 问题原因：https://juejin.cn/post/6844904086521774093#heading-3
     2. 只有当用户的第一次GET请求成功了，React Router才能被创建。我们碰到Cannot GET /* 是因为，如果你已经在/dashboard，再去刷新页面，浏览器会向服务器请求到/dashboard，但由于服务端没有处理这个请求的逻辑（请求应该由React Router完成），浏览器请求失败。
     3. 问题的根源是你把客户端路由完全交给React Router管理，没写任何处理服务端路由的逻辑。解决思路有二：第一，客户端和服务端路由都由你部署好。第二，把所有的请求都重定向到/index.html，并且保证index会加载所有的JS资源，让React Router可以从此接手。
        1. `hash history` 原理是在你的根URL末尾加一个#，任何#之后的部分都不会被发送给服务器。所以假设用户输入的URL是https://tm.io/#/courses，浏览器会发送请求到https://tm.io，顺利获取所有的JS资源，React Router会被加载，看到了当前路由/courses，再去加载正确的视图。
        2. `express` 类似的中间件服务器，所有的请求都返回 首页
        3. `Nginx .conf` location / { if (!-e $request_filename){ rewrite ^(.*)$ /index.html break;} };
        4. webpack - development : 1.设置 devServer 中`historyAPIFallback` 为 true；2.output设置 publicPath: '/'; 
  4. Prop type object if forbidden 在使用eslint时出现的报错。
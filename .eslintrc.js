/*
 * @Description: eslint 配置
 * @Author: 刘亚亚
 * @Date: 2020-06-04 17:09:56
 * @LastEditTime: 2020-06-09 11:54:31
 * @LastEditors: 刘亚亚
 */
module.exports = {
  "parser": "babel-eslint", // 解析器
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": { // 自己制定的规则
    "no-console": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-unresolved": [
      2,
      {
        "ignore": ["^@/"] // @ 是设置的路径别名
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/'],
          // ['@scss', './src/styles/'],
        ],
      }
    }
  }
}
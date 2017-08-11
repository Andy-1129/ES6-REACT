//import 名称(随意最好不要)首字母必须大写 from '模块名';
import React from 'react';
import ReactDom from 'react-dom';// react-dom包 依赖 react包

import App from './App';//引入自己建的模块 必须加 ./
import './main.css'; //引入  css样式直接 引入 相对路径就行

//ReactDom.render(组件名，挂载位置（在idex.html页面渲染的位置）)
//<Hello />  挂载  标签字应关闭的 加 空格
ReactDom.render(<App />,document.getElementById('app'));

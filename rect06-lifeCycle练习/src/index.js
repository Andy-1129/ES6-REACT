//import 名称(随意最好不要)首字母必须大写 from '模块名';
import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import './commom.css';

ReactDom.render(<App />,document.getElementById('app'))
ReactDom.render(<pictureCicle />,document.getElementById('picCicle'))

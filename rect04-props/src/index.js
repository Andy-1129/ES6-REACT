//import 名称(随意最好不要)首字母必须大写 from '模块名';
import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import './main.css';


class Props extends React.Component{
  render(){
    console.log(this.props);//是个对象：包含父组件定义的属性
    return(
      <div>{/*通过props(组件内部属性)，来调用*/}
        <p>直接传递props</p>
        <div>我是父组件传来的：{this.props.name}</div>
        <p>通过定义变量传递props</p>
        <div>{this.props.shuxing.age}<br />{this.props.shuxing .sex}</div>
      </div>
    )
  }
}
let people = {
  age:'20',
  sex:'男'
}
//父组件：谁调用 某一组件 ，谁就是该组件的父组件；父组件中定义的属性就是子组件的prop 内部属性
ReactDom.render(<Props name="父组件" shuxing={{...people}}/>,document.getElementById('props'))//ES6语法...spead:传递多个参数  在这要用{{}}双括号   在return（）中用{}单括号
ReactDom.render(<App />,document.getElementById('app'));

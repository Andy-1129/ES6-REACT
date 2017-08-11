import React from 'react';
import ReactDom from 'react-dom';// react-dom包 依赖 react包

class MyComponent extends React.Component{ //固定 继承的
  render(){
    return(
      <div>
        <p>组件代码</p>
      </div>
    )
  }
}

//简单组件    1.组件就用class来创建 2.组件名首字母大写  3.必须有render(){return{}} 之后可以创建其他方法   4.方法之间不加  逗号
class Header extends React.Component{ //固定 继承的
  aag(){

  }
  render(){
    return(
      <div>
        <p className='demo'>hello word</p>
        <MyComponent />
      </div>
    )
  }
}
export default Header; //默认导出 exports default 组件名；

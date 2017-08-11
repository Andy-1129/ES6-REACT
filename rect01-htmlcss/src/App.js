import React from 'react';
import ReactDom from 'react-dom';// react-dom包 依赖 react包

import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';//引入其他组件


class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Banner />
        <Footer />
      </div>
    )
  }
}

export default App; //默认导出 exports default 组件名；

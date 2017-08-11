import React from 'react';
import ReactDom from 'react-dom';// react-dom包 依赖 react包

import bg from './img/bg.png'; //在组建中用图片 将图片引入 变成一个变量
import bg1 from './img/bg1.jpg';

class Banner extends React.Component{
  render(){
    let styles={
      root:{
        width:'300px',
        height:"50px",
        bgckgroundImage: `url(${bg1})`
      },
      p:{
        color:'white',
        fontSize:'30px'
      }
    };
    return(
      <div style={styles.root}>
        <p style={styles.p}>Banner</p>
        <img src={bg}/> 
      </div>
    )
  }
}


export default Banner; //默认导出 exports default 组件名；

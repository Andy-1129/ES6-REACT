import React from 'react';
import ReactDom from 'react-dom';// react-dom包 依赖 react包

class Footer extends React.Component{
  styles(){// css样式 方案二   render(){}外写 定义一个styles()方法
    return{
      root:{
        width:'300px',
        height:"50px",
        backgroundColor:'green'
      },
      p:{
        color:'white',
        fontSize:'30px'
      },
      p1:{
        fontSize:'15px'
      }
    }
  }
  render(){
    let styles = this.styles();
    console.log(styles);
    return(
      <div style={styles.root}>
        <p style={styles.p}>Footer</p>
        <p style={{fontSize:'15px'}}>Footer</p> 
      </div>
    )
  }
}


export default Footer; //默认导出 exports default 组件名；

import React from 'react';

class Btn extends React.Component{
  render(){
    let styles ={
      btn:{
        borderRadius:'5px',
        border:'1px solid red',
        padding:'10px 20px',
        marginBottom:'20px',
        backgroundColor: this.props.bg//通过父组件定制更多属性
      }
    }
    return(
      <div>
        <button style={styles.btn}>{this.props.title}</button>
      </div>
    )
  }
}
Btn.degualtProps={//设置默认内部属性
  title:'请输入内容',
  bg:'blue'
}

export default Btn;

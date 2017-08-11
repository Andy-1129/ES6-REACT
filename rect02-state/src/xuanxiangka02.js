import React from 'react';
import ReactDom from 'react-dom';

class Xxk2 extends React.Component{
  constructor(){
    super();
    this.state={
      onShow:0,
      bgColor:'black'
    }
  }
  click(x,y){//传值改变状态
      this.setState({
        onShow:x,
        bgColor:y
      })
  }
  render(){
    let box1 = '内容111111111<p>加快点击开放男</p>';
    let box2 = '内容2222222222255';
    let box3 = '内容33333333333332';
    let box = ['01','02','03']; //合并成数组，声明一个变量
    let box4 = <div>啊暴风科技把手机</div> //标签
    let styles ={
      root:{
        width:'50vw',
        height:'50vw',
        backgroundColor:this.state.bgColor,//改变颜色，加一个状态
        color:'white'
      }
    }
    return(
      <div>
        <div>
          <button onClick={this.click.bind(this,1,'green')}>选项一</button>
          <button onClick={this.click.bind(this,2,'blue')}>选项二</button>
          <button onClick={this.click.bind(this,3,'#654')}>选项三</button>
        </div>
        <div style={styles.root}>
                              {/*数组内容*/}
          {this.state.onShow==1 ? box[0] :
            this.state.onShow==2 ? box2 :
            this.state.onShow==3 ? box4 : '内容无法显示！'
          }
        </div>
      </div>
    )
  }
}

export default Xxk2;

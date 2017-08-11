import React from 'react';
import ReactDom from 'react-dom';

class Xxk extends React.Component{
  constructor(){
    super();
    this.state={
      nowShow:1
    }
  }
  click1(){
    this.setState({
      nowShow:1
    })
  }
  click2(){
    this.setState({
      nowShow:2
    })
  }
  click3(){
    this.setState({
      nowShow:3
    })
  }
  render(){
    let styles = {
      box1:{width:'300px',height:'200px',color:'#fff',border:'1px solid black',display:this.state.nowShow==1 ? 'block' : 'none'},
      box2:{width:'300px',height:'200px',color:'#fff',border:'1px solid black',display:this.state.nowShow==2 ? 'block' : 'none'},
      box3:{width:'300px',height:'200px',color:'#fff',border:'1px solid black',display:this.state.nowShow==3 ? 'block' : 'none'}
    }
    return(
      <div>
        <div>
          <button onClick={this.click1.bind(this)}>选项卡1</button>
          <button onClick={this.click2.bind(this)}>选项卡2</button>
          <button onClick={this.click3.bind(this)}>选项卡3</button>
        </div>
        <div style={styles.box1}>内容111</div>
        <div style={styles.box2}>内容2222222222</div>
        <div style={styles.box3}>内容3333333</div>
      </div>
    )
  }
}

export default Xxk;

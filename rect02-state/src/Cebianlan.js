import React from 'react';

class Cbl extends React.Component{
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  styles(){
    return{
      nav:{
        position:'absolute',
        top:'0',
        right:this.state.show ? '0%' : '-40%',
        bottom:'0',
        width:'40%',
        backgroundColor:'#698',
        color:'white',
        transition:'all 0.5s'
      },
      boxShadow:{
        display:this.state.show ? 'block' : 'none',
        position:'absolute',
        top:'0',
        left:'0',
        right:'0',
        bottom:'0',
        backgroundColor:'rgba(0,0,0,0.3)'
      }
    }
  }
  onShow(){
    this.setState({
      show:!this.state.show
    })
  }
  render(){
    let styles = this.styles();
    return(
      <div>
        <button onClick={this.onShow.bind(this)}>侧栏</button>
        <div style={styles.boxShadow} onClick={this.onShow.bind(this)}>我是透明阴影</div>
        <div style={styles.nav}>我是导航</div>
      </div>
    )
  }
}

export default Cbl;

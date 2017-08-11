import React from 'react';

import Pic1 from './img/1.jpg';
import Pic2 from './img/2.jpg';
import Pic3 from './img/3.jpg';
import Pic4 from './img/4.jpg';

class pictureCicle extends React.Component{
  constructor(){
    super();
    this.state={
      nowShow:0
    }
  }
  add(i){
    clearInterval(this.setInterval);
    this.setState({nowShow:this.state.nowShow+i});
    let t=setTimeout(
      this.setInterval = setInterval(this.add.bind(this,1),2000),3000
    )
  }
  pase(){
      clearInterval(this.setInterval);
  }
  replay(){
    this.setInterval = setInterval(this.add.bind(this,1),2000);
  }
  componentDidMount(){
    this.setInterval = setInterval(this.add.bind(this,1),2000);
  }
  componentWillUpdate(nextProps,nextState){
    if(nextState.nowShow>3){
      this.setState({nowShow:0});
    }//是图片成为循环  尾接首
    if(nextState.nowShow<0){
      this.setState({nowShow:3})
    }//是图片成为循环  首接尾
  }
  render(){
    let styles={
      root:{
        position:'relative'
      },
      ul:{
        width:'400%',
        position:'absolute',
        left: '-'+this.state.nowShow*100+'%'
      },
      li:{
        width:'25%',
        listStyle:'none',
        float:'left'
      },
      pic:{
        width:'100%',
        height:'400px'
      }
    };
    return(
      <div style={styles.root}>
        <ul style={styles.ul} className="clearfix" onMouseOver={this.pase.bind(this)} onMouseOut={this.replay.bind(this)}>
          <li style={styles.li} ><img src={Pic1} style={styles.pic}/></li>
          <li style={styles.li} ><img src={Pic2} style={styles.pic}/></li>
          <li style={styles.li} ><img src={Pic3} style={styles.pic}/></li>
          <li style={styles.li} ><img src={Pic4} style={styles.pic}/></li>
        </ul>
        <span className="arrow left" onClick={this.add.bind(this,-1)}>&lt;</span>
        <span className="arrow right" onClick={this.add.bind(this,1)}>&gt;</span>
      </div>
    )
  }
}

export default pictureCicle;

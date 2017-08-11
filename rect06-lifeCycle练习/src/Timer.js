import React from 'react';


class Timer extends React.Component{
  constructor(){
    super();
    this.state={
      second:0
    }
  }
  tick(){
    this.setState({second:this.state.second + 1});
  }
  componentDidMount(){//render 之后触发该函数，所以将js写在这
    this.interval = setInterval(this.tick.bind(this),1000);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(nextState);
    if (nextState.second<10) {
      return true
    }else{
      clearInterval(this.interval);
      return true  //如果为flase只会进行到 9
    }
  }
  render(){
    return(
      <div>
        <p>当前秒数是:{this.state.second} s</p>
      </div>
    )
  }
}
export default Timer;

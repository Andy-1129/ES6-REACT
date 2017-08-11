//import 名称(随意最好不要)首字母必须大写 from '模块名';
import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import './main.css';

class State extends React.Component {
  constructor() {
    super();
    this.state={
      yes:true,
      num:0
    }
  }
  addClick(){
    this.setState({
      num : this.state.num +1
    })
  }
  render(){
    //注释
    return(
      <div>
        {/*注释*/}
        {this.state.yes ? '我是对的' : '我是错的'}
        {this.state.num}
        <button onClick={this.addClick.bind(this)}>+</button>
      </div>
    )
  }
}

ReactDom.render(<State />,document.getElementById('num'));
ReactDom.render(<App />,document.getElementById('app'));

import React from 'react';

class App extends React.Component{
  //初始化时，不会因为函数的顺序而改变触发顺序
  constructor(){
    super();//初始化1.1相当于获取默认属性值getDefaultProps()
    this.state={  //初始化1.2相当于获取初始状态getInitalState()
      num:1
    }
    console.log('init');
  }
  componentWillMount(){  //初始化2.组件将要首次挂载
    console.log('will');
  }
  componentDidMount(){  //初始化4.组件首次挂载之后
    console.log('did');
  }
  //生命周期函数都有其各自的参数，优化组件 就靠这些函数
  shouldComponentUpdate(nextProps,nextState){//更新2.判断是否应该更新
    console.log(nextProps,nextState);
    console.log('是否应该更新');
    if(nextState.num>5){ //this.state.num 更新还在继续
      return false
    }else{
      return true
    }
  }
  componentWillReceiveProps(nextProps){  //更新1.将要改变props
    console.log('下一个props是',nextProps);
    if (nextProps.propsNum>5) { //实现循环
      alert('aaa')
    }
  }
  componentWillUpdate(nextProps,nestState){  //更新3.更新之前
    console.log('将要更新');
    // if (nextState.num<4) { //实现循环
    //   this.setState({num:0})
    // }
  }
  componentDidUpdate(prevProps,prevState){  //更新4.更新之后
    console.log(prevProps,prevState);
    console.log('更新完了');
  }
  click(){
    this.setState({num:this.state.num+1})
  }
  render(){ //初始化3.渲染
    console.log('render');
    return(
      <div>
        <p>生命周期函数</p>
        <p>我的state是：{this.state.num}</p>
        <button onClick={this.click.bind(this)}>click</button><br />
        我的props是：
        {this.props.propsNum}

      </div>
    )
  }
}
export default App;

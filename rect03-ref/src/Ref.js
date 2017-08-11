import React,{PropTypes} from 'react';

class Ref extends React.Component{
  click(){
    console.log(this.refs.a1, this.refs.a2);//refs 获取整个标签（内容+结构）
  }
  render(){
    return(
      <div>
        <button onClick={this.click.bind(this)}>Click</button>
        <div ref='a1'>我是div1</div>{/*ref 给标签起名 首字母不能是数字*/}
        <div ref='a2'>我是div2</div>
      </div>
    )
  }
}

export default Ref;

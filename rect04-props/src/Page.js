//实现分页的效果
import React from 'react';

let arr = [
  '第一页','发件地方','打法是否拿到','开始交电费','sjkd',
  '第二页','发件地二','打法是否拿二','开始交电二','sjk二',
  '第三页','发件地三','打法是否拿三','开始交电三','sjk三',
  '第四页','发件地四','打法是否拿四','开始交电四','sjk四',
  '第五页','发件地五','打法是否拿五','开始交电五','sjk五'
];
class Page extends React.Component{
  constructor(){
    super();
    this.state={
      page:0
    }
  }
  changPage(i){
    this.setState({  page:i})
  }
  pageGo(i){
    let _num = this.state.page + i;
    let pageNum = Math.ceil(arr.length/5);

    if(_num<0){
      this.setState({  page:0 })
    }else if(_num>pageNum-1){
      this.setState({  page:4 })
    }else{
      this.setState({
        page:_num
      })
    }
  }
  render(){
    {/*显示第几页的内容*/}
    let showArr = [];
    let num = this.state.page;
    for(let i=num*5;i<(num+1)*5;i++){
      showArr.push(arr[i]);
    };
    let items = showArr.map((item,i) => <p key={i}>{item}</p>);
    {/*翻页效果*/}
    let btnNum = Math.ceil(arr.length/5);
    let btns = [];
    for(let i=0;i<btnNum;i++){
      //复用 btn 组件
      btns.push(
        <button key={i} onClick={this.changPage.bind(this,i)}>第{i+1}页</button>
      );
    }
    return(
      <div>
        {items}
        <button onClick={this.pageGo.bind(this,-1)}>上一页</button>
        {btns}
        <button onClick={this.pageGo.bind(this,1)}>下一页</button>
      </div>
    )
  }
}

export default Page;

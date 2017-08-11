import React from 'react';

import Btn from './Btn';
import Card from './Card';
import data from './data';
import Page from './Page';

//1.通过创建数组 传递多个属性 2.传递多个相同的标签，会出现警告 解决：对标签加 key 属性（字符串，对象，数字）但key不是props属性 也不能被 this.props.key拿到
//let btns=[<Btn title='第一个' bg='green' key='asd'/>,<Btn title='第二个' bg='blue' key={1}/>]

//传递更多的数据，
//前边定义默认props属性，自己修改想修改的属性，其他属性直接应用
let content=[
  {title:'liming',bg:'#865'},
  {bg:'#695'},
  {title:'jasdg'},
  {title:'jeko'},
  {bg:'#639587'},
  {title:'liu',},
]
//方法一 ES 5
// let btns=[];
// for (let i = 0; i < content.length; i++) {
//   btns.push(
//     <Btn title={content[i].title} bg={content[i].bg} key={i} />
//   )
// }

//方法2 ES6写法 map 遍历一个数组，返回一个数组
//1.
// let btns = content.map(function(item,index){
//   //console.log(item);//item 相当于数组的每一条 idex: 表示第几个
//   return <Btn title={item.title} bg={item.bg} key={index} />
// });
//2.
let btns = content.map( (item,num) => <Btn title={item.title} bg={item.bg} key={num} />);

//组件 App 调用 组件 Btn,则  组件 App 就是 组件 Btn 的父组件
class App extends React.Component{
  render(){
    {/*方法一let cards = data.map( (item,i) => <Card title={item.title} data={item.data} index={item.index} key={i} /> ); */}
    let cards = data.map((item,i) => <Card {...item} key={i} />);
    return(
      <div>
        <div>{btns}</div>
        {cards}
        <Page />
      </div>
    )
  }
}
export default App;

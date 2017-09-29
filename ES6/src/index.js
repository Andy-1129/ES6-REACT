'use strict'
// 1.let const
//重复定义会报错
if(true){
  let a = 1;
  //let a = 2; //Identifier 'a' has already been declared
}

//不存在变量的提升
console.log(i)
let i=10;
//结果 i is not define
//嵌套循环不相互影响
for (let i = 0; i < 3; i++) {
  console.log('out',i);
  for(let i = 0;i<2;i++){
    console.log('in',i);
  }
}//结果 out 0 in 0 in 1 out 1 in 0 in 1 out 2 in 0 in 1
//里边的能拿到外边的值，外边的拿不到里边的值
// 2.解构
//解构意思就是分解一个东西的结构,可以用一种类似数组的方式定义N个变量，可以将一个数组中的值按照规则赋值过去。
var [name,age] = ['zfpx',8];

console.log(name,age); // zfpx 8

var [x,y]=getVal(),//函数返回值的解构
    [name,,age]=['zf','male','secrect'];//数组解构

function getVal() {
    return [ 1, 2 ];
}

console.log('x:'+x+', y:'+y);//输出：x:1, y:2
console.log('name:'+name+', age:'+age);//输出： name:zf, age:secrect
//数组、对象和字符串的解构赋值示例：
// 数组的解构赋值
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

// 对象的解构赋值
let { foa, bab } = { foa: "aaa", bab: "bbb" };
console.log(foa);   // "aaa"
console.log(bab);  // "bbb"

// 字符串的解构赋值
const [a, b, c, d, e] = 'hello';
console.log(a + d + c + b); // 'hello'

// 3.Arrows 箭头函数 #
//①箭头函数简化了函数的的定义方式，一般以 "=>" 操作符左边为输入的参数，而右边则是进行的操作以及返回的值Inputs=>outputs。
//②箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数，从而避免了this指向的问题。
let array = [1,2,3];
//传统写法
array.forEach(function(v,i,n){
  console.log(v);
});
//ES6写法
array.forEach(v => console.log(v));

//4.Template Strings 字符串模板
//ES6中允许使用反引号 ` 来创建字符串，此种方法创建的字符串里面可以包含由美元符号加花括号包裹的变量${vraible}。
let arr1 = 'leifeng';
let age1 = '18';
console.log(`${arr1} was ${age1}`);
//不加（）输出的是数组,只有第一个 `` 内的内容起作用
console.log`123456`+`789`;
//加（）输出的是字符串
console.log(`123456`+`445`);

//5.Default + Rest + Spread
//Default 默认参数值,定义函数的时指定参数的默认值
function say(name5 = 'zhaoan') {
  console.log(`hello ${name5}`);
}
say();
say('xiaolli');
// rest剩余参数  不定参数是在函数中使用命名参数同时接收不定数量的未命名参数。这只是一种语法糖，
//不定参数的格式是三个句点后跟代表所有不定参数的变量名。比如下面这个例子中，…x代表了所有传入add函数的参数。
function restFun(a,...rest) {
  console.log(a);
  console.log(rest);
}
restFun(1);
restFun(1,2,5);

//将所有参数相加的函数
function add(...x){
    return x.reduce((m,n)=>m+n);
}
//传递任意个数的参数
console.log(add(1,2,3));//输出：6
console.log(add(1,2,3,4,5));//输出：15

//Spread 扩展操作符 扩展操作符则是另一种形式的语法糖，它允许传递数组或者类数组直接做为函数的参数而不用通过apply。
var arry = ['jd','hk','we'];
function sayHellow(...rest){
  console.log(`hellow ${rest[0]},${rest[1]},${rest[2]}`);
}
//将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHellow(...arry);
//需要传递数组当参数，我们需要使用函数的apply方法
sayHellow.apply(null,arry);
//6.Class, extends, super 类的支持
//ES6中添加了对类的支持，引入了class关键字
//类的定义
class Animal {
    //ES6中新型构造器
    constructor(name) {
        this.name = name;
    }
    //实例方法
    sayName() {
        console.log('My name is '+this.name);
    }
}
//类的继承
class Programmer extends Animal {
  constructor(name) {
      //直接调用父类构造器进行初始化
    super(name);
  }
  program() {
    console.log("I'm coding...");
  }
}

//测试我们的类
var animal=new Animal('dummy'),
zf=new Programmer('zf');

animal.sayName();//输出 ‘My name is dummy’
zf.sayName();//输出 ‘My name is zf’
zf.program();//输出 ‘I'm coding...’
// 例子：
class className1 {
  constructor(){
    this.aa= '属性name1'
  }//只写属性(可写其他的东西但最好不写)
  name1(){//方法和其他另写
    let x = 10;
    console.log('111');
  }
}
// let text1 = new className1();
// console.log(text1.ll);

// extends  类继承 所有的属性方法
class className2 extends className1 {
  constructor(){
    super(); //可理解为继承的意思
    this.bb = 'name2的属性'
  }//如果为空 需注释掉或删掉否则报错，如果要写新的属性则头部必加super()
  name2(){
    console.log('我是name2');
  }
}
let text2 = new className2();

console.log(text2.name2());
console.log(text2.name1());
console.log(text2.bb);
console.log(text2.aa);

// 7.Modules 模块

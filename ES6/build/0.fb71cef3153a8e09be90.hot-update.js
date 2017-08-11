webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 1.let const
//重复定义会报错

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (true) {
  var _a = 1;
  //let a = 2; //Identifier 'a' has already been declared
}

//不存在变量的提升
console.log(i);
var i = 10;
//结果 i is not define
//嵌套循环不相互影响
for (var _i = 0; _i < 3; _i++) {
  console.log('out', _i);
  for (var _i2 = 0; _i2 < 2; _i2++) {
    console.log('in', _i2);
  }
} //结果 out 0 in 0 in 1 out 1 in 0 in 1 out 2 in 0 in 1
//里边的能拿到外边的值，外边的拿不到里边的值
// 2.解构
//解构意思就是分解一个东西的结构,可以用一种类似数组的方式定义N个变量，可以将一个数组中的值按照规则赋值过去。
var name = 'zfpx',
    age = 8;

console.log(name, age); // zfpx 8

var _getVal = getVal(),
    _getVal2 = _slicedToArray(_getVal, 2),
    x = _getVal2[0],
    y = _getVal2[1],
    _ref = ['zf', 'male', 'secrect'],
    name = _ref[0],
    age = _ref[2]; //数组解构

function getVal() {
  return [1, 2];
}

console.log('x:' + x + ', y:' + y); //输出：x:1, y:2
console.log('name:' + name + ', age:' + age); //输出： name:zf, age:secrect
//数组、对象和字符串的解构赋值示例：
// 数组的解构赋值
var foo = 1,
    bar = 2,
    baz = 3;

console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

// 对象的解构赋值
var _foa$bab = { foa: "aaa", bab: "bbb" },
    foa = _foa$bab.foa,
    bab = _foa$bab.bab;

console.log(foa); // "aaa"
console.log(bab); // "bbb"

// 字符串的解构赋值

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    a = _hello2[0],
    b = _hello2[1],
    c = _hello2[2],
    d = _hello2[3],
    e = _hello2[4];

console.log(a + b + c + e); // 'hello'

// 3.Arrows 箭头函数 #
//①箭头函数简化了函数的的定义方式，一般以 "=>" 操作符左边为输入的参数，而右边则是进行的操作以及返回的值Inputs=>outputs。
//②箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数，从而避免了this指向的问题。
var array = [1, 2, 3];
//传统写法
array.forEach(function (v, i, n) {
  console.log(v);
});
//ES6写法
array.forEach(function (v) {
  return console.log(v);
});

//4.Template Strings 字符串模板
//ES6中允许使用反引号 ` 来创建字符串，此种方法创建的字符串里面可以包含由美元符号加花括号包裹的变量${vraible}。
var arr1 = 'leifeng';
var age1 = '18';
console.log(arr1 + ' was ' + age);
// ...rest
var arry = ['jd', 'hk', 'we'];
function sayHellow() {
  console.log('hellow ${rest[0]},${rest[1]},${rest[2]}');
}
sayHellow.apply(undefined, arry);
//3. 类中方法constructor 中只写属性

var className1 = function () {
  function className1() {
    _classCallCheck(this, className1);

    this.aa = '属性name1';
  } //只写属性(可写其他的东西但最好不写)


  _createClass(className1, [{
    key: 'name1',
    value: function name1() {
      //方法和其他另写
      var x = 10;
      console.log('111');
    }
  }]);

  return className1;
}();
// let text1 = new className1();
// console.log(text1.ll);

// extends  类继承 所有的属性方法


var className2 = function (_className) {
  _inherits(className2, _className);

  function className2() {
    _classCallCheck(this, className2);

    //可理解为继承的意思
    var _this = _possibleConstructorReturn(this, (className2.__proto__ || Object.getPrototypeOf(className2)).call(this));

    _this.bb = 'name2的属性';
    return _this;
  } //如果为空 需注释掉或删掉否则报错，如果要写新的属性则头部必加super()


  _createClass(className2, [{
    key: 'name2',
    value: function name2() {
      console.log('我是name2');
    }
  }]);

  return className2;
}(className1);

var text2 = new className2();

console.log(text2.name2());
console.log(text2.name1());
console.log(text2.bb);
console.log(text2.aa);

/***/ })
])
//# sourceMappingURL=0.fb71cef3153a8e09be90.hot-update.js.map
import React from 'react';
import './index.css'
// import {parseDiff, Diff, Hunk} from 'react-diff-view';


export default class Dnd extends React.Component{

	// 设置默认状态 可以修改 this.state
	constructor(props) {
        super(props);
        this.state = {};
    }

    // 组件即将渲染
    componentWillMount() {
        // class sup {
		// 	constructor(name) {
		// 		this.name = name
		// 	}
		
		// 	printName() {
		// 		console.log(this.name)
		// 	}
		// }
	
	
		// class sub extends sup{
		// 	constructor(name,age) {
		// 		super(name) // super代表的事父类的构造函数
		// 		this.age = age
		// 	}
		
		// 	printAge() {
		// 		console.log(this.age)
		// 	}
		// }
		
		// let jack = new sub('jack',20)
		// 	jack.printName()    //输出 : jack
		// 	jack.printAge()    //输出 : 20
		// }

// 构造函数
// function Person(name){
// 	this.name = name;
// 	this.sleep = function() {
// 		console.log('人以睡为天')
// 	}
// }
// Person.prototype.eat = function() {
//     console.log(this.name + '正在吃饭')
// }

// function Chinese(name){
// 	Person.call(this);
// 	this.name = name;
// }
// (function(){
// 	// 创建一个没有实例方法的类
// 	var Super = function(){};
// 	Super.prototype = Person.prototype;
// 	//将实例作为子类的原型
// 	Chinese.prototype = new Super();
// })();
// Chinese.prototype.constructor = Chinese;

// var lucy = new Chinese('lucy');
// console.log(lucy)
// console.log(lucy.name); // lucy
// lucy.eat(); // lucy正在吃饭
// lucy.sleep(); // 人以睡为天
// console.log(lucy instanceof Person); // true
// console.log(lucy instanceof Chinese); //true



// 实例化一个lucy对象
// const lucy = new Person('Lucy');
// lucy.eat(); // Lucy正在吃饭

// function Dog(name){
// 	Person.call(this);
// 	this.name = name;
// }
// Dog.prototype.speak = function() {
// 	console.log(this.name + '汪汪')
// }

// const dog = new Dog('旺财');
// // dog.eat()
// console.log(dog)

class Person {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Chinese extends Person {
	constructor(x, y, color) {
		super(x, y); // 调用父类的constructor(x, y)
		this.color = color;
	}

	toString() {
		return this.color + ' ' + super.toString(); // 调用父类的toString()
	}
}




	}


	render(){
		
		return (
			<div>
				dnd
			</div>
		) 
	}
}
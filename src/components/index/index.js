import React from 'react';
import cs from 'classnames';
import './index.css';
import Bar from '../common/bar/index';
import { SketchPicker } from 'react-color'

const tem = 'banner'
let classN = cs({
	'class1':true,
	'class2':false,
	[`class-${tem}`]:typeof tem === 'string' ? true : false
})
// console.log(classN)


export default class Index extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	background:'#333'
		}
	}

	// 组件即将渲染
    componentWillMount() {
		const a = {
			curPage:1,
			total:10,
			pageSize:100
		}
		const b = {
			oldPage:3
		}
		//const obj = Object.assign({},a,b,{'name':'lucy'})
		//console.log(obj)

		// 浅复制 就像一个人 给了另一个名字一样 两个名字都是指向一个人
		const a1 = Object.assign(a)
		a1.curPage = '哈哈哈'
		// 修改a1,a也变化了 a a1根本是同一个对象
		console.log(a,a1)

		// 深拷贝是指源对象与拷贝对象互相独立，其中任何一个对象的改动都不会对另外一个对象造成影响。
		// 举个例子，一个人名叫张三，后来用他克隆（假设法律允许）了另外一个人，叫李四，
		// 不管是张三缺胳膊少腿还是李四缺胳膊少腿都不会影响另外一个人。

		// 浅拷贝(影子克隆):只复制对象的基本类型,对象类型,仍属于原来的引用.
		// 深拷贝(深度克隆):不紧复制对象的基本类,同时也复制原对象中的对象.就是说完全是新对象产生的.

		// 浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。
		// 深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。

		// 深拷贝 方法1
		const c1 = Object.assign({},a)
		// 修改c1 不会影响到a
		c1.curPage = 1000
		console.log(a,c1)

		// 深拷贝 方法2
		const O1 = {
			curPage:1,
			total:10,
			pageSize:100
		}
		const O2 = this.deepClone(O1)
		O2.curPage = 'hello'
		console.log(O1,O2)
	}
	
	deepClone(initalObj) {
		var obj = {};
		for (var i in initalObj) {
			var prop = initalObj[i];
	
			// 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
			if(prop === obj) {
				continue;
			}
	
			if (typeof prop === 'object') {
				obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
			} else {
				obj[i] = prop;
			}
		}
		return obj;
	}
	
	// 自动绑定this测试
	testClick1(index){
		console.log(index)
	}
	testClick2(index){
		console.log(index)
	}

	handleChangeComplete = (color) => {
    	this.setState({ 
    		background: color.hex 
    	},()=>{
    		console.log('修改成功')
    	});
	}

	render(){ 
		const style = `
			i{
				color:red
			}
		`
		return (
		  	<div style={{background:this.state.background}}>
				<style dangerouslySetInnerHTML={{ __html: style }}></style>
		  		<i className={classN}>index page</i>
		  		<br />
		  		<button onClick={this.testClick1.bind(this,`${tem}-item`)}>testClick1</button>
		  		<br />
		  		<button onClick={() => this.testClick2(2222)}>testClick2</button>

		  		<SketchPicker 
          			color={ this.state.background }
              		onChangeComplete={ this.handleChangeComplete.bind(this) }
              	/>

		  		<Bar />
		  	</div>
		) 
	}
}

/*
安装
npm install classnames

import cs from 'classnames'
const tem = cs('foo', 'bar'); // 'foo bar'
const tem = cs({ foo: true }, { bar: true }); // 'foo bar'

let Tem = 'primary';
cs({ [`btn-${Tem}`]: true }); // 'btn-primary'


*/
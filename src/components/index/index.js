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
console.log(classN)


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
		// 修改a1,a也变化了 a a1指向的一个实体
		console.log(a,a1)

		// 浅拷贝(影子克隆):只复制对象的基本类型,对象类型,仍属于原来的引用.
		// 深拷贝(深度克隆):不紧复制对象的基本类,同时也复制原对象中的对象.就是说完全是新对象产生的.
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
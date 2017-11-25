import React from 'react';
import cs from 'classnames';
import './index.css';
import Bar from '../common/bar/index';

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
	    	
		}
	}
	
	// 自动绑定this测试
	testClick1(index){
		console.log(index)
	}
	testClick2(index){
		console.log(index)
	}

	render(){ 
		return (
		  	<div>
		  		<i className={classN}>index page</i>
		  		<br />
		  		<button onClick={this.testClick1.bind(this,`${tem}-item`)}>testClick1</button>
		  		<br />
		  		<button onClick={() => this.testClick2(2222)}>testClick2</button>



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
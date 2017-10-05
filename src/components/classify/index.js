import React from 'react';

import './index.css'

import Bar from '../common/bar/index';

import Header 	from '../header/header';

import ReactMixin from 'react-mixin'
// import {goback} from '../mixin'
// console.log(goback)

export default class Classify extends React.Component{
	// 父组件传递参数到子组件 通过this.props.userName 接收
	test(event){
		// goback();
	}
	render(){ 
		return (
		  	<div>
		  		<p onClick={this.test.bind(this)}>Classify</p>
		  		<Header userName="hhhhhh" userId="15" />
		  		<Bar />
		  	</div>
		) 
	}
}

// ReactMixin(Classify.prototype,goback);
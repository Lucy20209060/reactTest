import React from 'react';

import './index.css'

import Bar from '../common/bar/index';

import Header 	from '../header/header';

// import ReactMixin from 'react-mixin'
import {goback} from '../../tools/common'

import store from '../../redux/store/index'

export default class Classify extends React.Component{
	// 父组件传递参数到子组件 通过this.props.userName 接收
	test(event){
		const par = goback(111);
		console.log(store.getState())
	}

	render(){ 
		return (
		  	<div>
		  		<p onClick={this.test.bind(this)}>Classify</p>
		  		<Header userName="hhhhhh" userId="15" handleChildvalue={this.test.bind(this)} />
		  		<Bar />
		  	</div>
		) 
	}
}

// ReactMixin(Classify.prototype,goback);
import React from 'react';

import './index.css'

import Bar from '../common/bar/index';

import Header 	from '../header/header';

export default class Classify extends React.Component{
	// 父组件传递参数到子组件 通过this.props.userName 接收
	render(){ 
		return (
		  	<div>
		  		Classify
		  		<Header userName="hhhhhh" userId="15" />
		  		<Bar />
		  	</div>
		) 
	}
}
import React from 'react';

import './index.css'

import Bar from '../common/bar/index';

export default class Classify extends React.Component{
	// 父组件传递参数到子组件 通过this.props.userName 接收
	render(){ 
		return (
		  	<div>
		  		Classify
		  		<Bar />
		  	</div>
		) 
	}
}
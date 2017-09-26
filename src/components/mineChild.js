import React from 'react';

export default class mineChild extends React.Component{

	render(){ 
		return (
		  	<div>
		  		<button onClick={this.props.onClick}><h5>我的 / mineChild 组件</h5></button>
		  	</div>
		) 
	}
}
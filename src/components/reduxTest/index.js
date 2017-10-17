import React from 'react';

export default class reduxTest extends React.Component{

	constructor(props) { // 设置初始值
	    super(props);
	    this.state = {
	    	items: [],
	    	itemHtml:''
		}
	}


	render(){
		return (
		  	<div>
		  		reduxTest页面
		  	</div>
		) 
	}
}
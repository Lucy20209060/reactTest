import React from 'react';

export default class Header extends React.Component{

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
		  		readuxtest页面
		  	</div>
		) 
	}
}
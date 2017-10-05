import React from 'react';
import './index.css';
var ButtonActions = require('../../flux/action');
var ListStore = require('../../flux/store');



export default class Header extends React.Component{

	constructor(props) { // 设置初始值
	    super(props);
	    this.state = {
	    	items: [],
	    	itemHtml:''
		}
	}

	_onChange() {
		this.setState({
			items: ListStore.getAll()
		})
		console.log('_onChange')
	}



	createNewItem(event) {
		const temValue = 'lucy'
	    ButtonActions.addNewItem(temValue);

	    this.setState({
			items: ListStore.getAll()
	    })

	    
	    console.log(this.state.items)
	}
	

	render(){
		return (
		  	<div>
		  		<p style={{fontSize:'40px',color:'red'}}>flux测试</p>
		  		<button onClick={this.createNewItem.bind(this)}>点击</button>
				{
					this.state.items.map((e,index) => {
	                    return (
	                        <p key={index}>{e}</p>
	                    )
	                })
				}
		  	</div>
		) 
	}
}
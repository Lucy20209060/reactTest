import React from 'react';
var ButtonActions = require('../flux/action');
var ListStore = require('../flux/store');

export default class Header extends React.Component{

	constructor(props) { // 设置初始值
	    super(props);
	    this.state = {
	    	items: [],
	    	itemHtml:''
		}
	}

	// componentDidMount() {
	// 	ListStore.addChangeListener(this._onChange);
	// 	console.log(111)
	// }

	// componentWillUnmount() {
	// 	ListStore.removeChangeListener(this._onChange);
	// 	console.log(222)
	// }

	_onChange() {
		this.setState({
			items: ListStore.getAll()
		})
		console.log('_onChange')
	}


	// var itemHtml = this.state.items.map(function (listItem, i) {
	// 		return <li key={i}>{listItem}</li>;
	// 	});
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
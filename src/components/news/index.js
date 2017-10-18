import React from 'react';
import './index.css';
var ButtonActions = require('../../flux/action');
var ListStore = require('../../flux/store');



export default class Header extends React.Component{

	constructor(props) { // 设置初始值
	    super(props);
	    this.state = {
	    	items: [],
	    	itemHtml:'',

	    	sign1:false,
	    	sign2:false,
	    	sign3:false,
	    	sign4:false
		}
	}

	_onChange() {
		this.setState({
			items: ListStore.getAll()
		})
		console.log('_onChange')
	}

	// 多选改变状态
	checkboxonChange(val){

		let obj = {};

        obj[`sign${val}`] = !this.state[`sign${val}`];

		this.setState(obj);
	}

	createNewItem(event) {
		const temValue = 'lucy'
	    ButtonActions.addNewItem(temValue);

	    this.setState({
			items: ListStore.getAll()
	    })
	}


	render(){
		

		return (
		  	<div className="news-wrap">
				<label><input name="Fruit" type="checkbox" checked={this.state.sign1} onChange={this.checkboxonChange.bind(this,1)} />苹果 </label> 
				<label><input name="Fruit" type="checkbox" checked={this.state.sign2} onChange={this.checkboxonChange.bind(this,2)} />桃子 </label> 
				<label><input name="Fruit" type="checkbox" checked={this.state.sign3} onChange={this.checkboxonChange.bind(this,3)} />香蕉 </label> 
				<label><input name="Fruit" type="checkbox" checked={this.state.sign4} onChange={this.checkboxonChange.bind(this,4)} />梨 </label>



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
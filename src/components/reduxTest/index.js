import React from 'react';

// import { createStore } from 'redux';

// let store = createStore(counter);

import store from '../../redux/store/index'
import {add,cut} from '../../redux/actions/num'

import {set,ret} from '../../redux/actions/user'

// function counter (state = 0, action) {
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return state + 1;
// 		case 'DECREMENT':
// 			return state - 1;
// 		default:
// 			return state;
// 	}
// }

// store.subscribe(() =>
//   console.log(store.getState())
// );
import { NavLink } from 'react-router-dom'; // NavLink有激活class Link没有

export default class reduxTest extends React.Component{

	constructor(props) { // 设置初始值
	    super(props);
	    this.state = {
	    	items: [],
	    	itemHtml:store.getState()
		}
	}

	tap(){
		add();
		ret({a:1,b:3});

		this.setState({
			itemHtml: store.getState()
	    })
	}

	tap2(){
		cut();
		// store.dispatch({ type: 'DECREMENT' });

		// console.log(store.getState())

		this.setState({
			itemHtml: store.getState()
	    })
	}

	

	render(){

		return (
		  	<div>
		  		<i>{this.state.itemHtml.number}</i>
		  		<p><button onClick={this.tap.bind(this)}>INCREMENT</button></p>
		  		<p><button onClick={this.tap2.bind(this)}>DECREMENT</button></p>

		  		<NavLink to="/classify">go classify</NavLink>
		  	</div>
		) 
	}
}
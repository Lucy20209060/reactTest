import React from 'react';
import './index.css';

import store from '../../redux/store/index'
import {add,cut} from '../../redux/actions/num'

import {ret} from '../../redux/actions/user'

import { NavLink } from 'react-router-dom';
// import {connect} from 'react-redux';


// store.subscribe(() =>
//   console.log(store.getState())
// );


// https://github.com/lipeishang/react-redux-connect-demo/blob/master/public/src/containers/App.js

// @connect(
// 	(state) => {
// 		return({
// 			user:state.user
// 		})
// 	},{}
// )

export default class reduxTest extends React.Component{

	constructor(props) { // 设置初始值
	    super(props);
	    this.state = {
	    	items: [],
	    	itemHtml:store.getState()
		}
	}

	tap(){
		// this.props.history.push('/index');
		// return
		add();
		ret({a:'lucy',b:'啊啊啊五环你比四环多一环'});
		console.log(store.getState())

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
		  	<div className="reduxTest-wrap">
		  		<i>{this.state.itemHtml.number}</i>
		  		<p><button onClick={this.tap.bind(this)}>INCREMENT</button></p>
		  		<p><button onClick={this.tap2.bind(this)}>DECREMENT</button></p>

		  		<NavLink to="/classify">go classify</NavLink>
		  	</div>
		) 
	}
}
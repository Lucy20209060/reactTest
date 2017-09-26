import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import 'whatwg-fetch';
// import 'es6-promise';

import Bar from './components/common/bar/index';
import logo from './images/jishi.png'
import { Link } from 'react-router-dom';

export default class App extends React.Component{  

	constructor(){
		super();
		this.state = {
			siteInfo:{
				id:0,
				name:'全国'
			}
			
		}
	}


	render() {
		return (
			<div className="App-wrap">
				{/*引入图片*/}
				{/*	<img src={logo} className="App-logo" alt="logo" /> */}
				{/* 引入iconfont */}
				{/* <i className="iconfont icon-sousuo"></i> */}


				<header>
					<div>
						<a href="javascript:;">{this.state.siteInfo.name}</a>
					</div>
					<p>
						<img src={logo} className="App-logo" alt="logo" />
					</p>
					<Link to="/classify" className="iconfont icon-sousuo"></Link>
				</header>

				<Bar />
			</div>
		);
	}
}

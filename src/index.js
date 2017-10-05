/**
 * 
 * @authors 卢超
 * @date    2017-06-10
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';

// 初始css , iconfont.css , rem.css
import './tools/reset/reset.css';
import './tools/font/iconfont.css';
import './tools/reset/rem';

// Components
import App 			from './App';
import Classify 	from './components/classify/index';
import Car 			from './components/car/index';
import Mine 		from './components/mine/index';
import Login 		from './components/login/index';
import News 		from './components/news/index';
import ReduxTest 	from './components/reduxTest/index'

// 登录标志
const loginSign = true

ReactDOM.render(
	<BrowserRouter>
		<div style={{height:'100%'}}>

			{/*
				路由配置
			*/}

			{/* 重定向 此时路由必须严格模式 exact '/' => '/index' */}
			<Route 
				exact 
				path="/" 
				render={ () => (
						<Redirect to="/index" />
					) 
				} />

		    <Route path="/index" component={ App }/>

		    <Route 
		    	path="/classify" 
		    	component={
		    		loginSign ? Classify : Login
		    	} />

		    <Route 
		    	path="/car/:id" 
		    	component={
			    	loginSign ? Car : Login
			    } />

		    <Route 
			    path="/mine" 
			    component={
			    	loginSign ? Mine : Login
			    } />

		    <Route path="/login" component={Login} />

		    <Route path="/news" component={News} />

		    <Route path="/reduxTest" component={ReduxTest} />

        

			{/*
				根据条件重定向
			    render={() => (
		          logined 
		          ? <h1>欢迎来到登录页面</h1>
		          : <Redirect to="/new/login" />
		         )} 

			    <Route path="/header" component={Header} onEnter={console.log('11111111111')}></Route>
			*/}

		</div>
	</BrowserRouter>,document.getElementById('root')
);
registerServiceWorker();

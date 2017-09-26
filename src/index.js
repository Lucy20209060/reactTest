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

// import {Router,Route,browserHistory,IndexRoute} from 'react-router';
// import Header from './components/header/header';
// import About from './components/about';
// import Cart from './components/cart';
// import MineChild from './components/mineChild';
// import News from './components/news';
// import ReduxTest from './components/reduxTest';
// import Bannder from './components/bannder/bannder';

// Components
import App 			from './App';
import Classify 	from './components/classify/index';
import Car 			from './components/car/index';
import Mine 		from './components/mine/index';
import Login 		from './components/login/index';

ReactDOM.render(
	<BrowserRouter>
		<div style={{height:'100%'}}>
			{/* 重定向 此时路由必须严格模式 exact '/' => '/index' */}
			<Route exact path="/" render={ () => (<Redirect to="/index" />) }  />
		    <Route path="/index" component={App} />
		    <Route path="/classify" component={Classify} />
		    <Route path="/car" component={Car} />
		    <Route path="/mine" component={Mine} />
		    <Route path="/login" component={Login} />

        

			{/*
				根据条件重定向
			    render={() => (
		          logined 
		          ? <h1>欢迎来到登录页面</h1>
		          : <Redirect to="/new/login" />
		         )} 

			    <Route path="/header" component={Header} onEnter={console.log('11111111111')}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/cart/:id" component={Cart}></Route>
				<Route path="/mine" component={Mine}></Route>
				<Route path="/mine/mineChild" component={MineChild}></Route>
				<Route path="/news" component={News}></Route>
				<Route path="/reduxTest" component={ReduxTest}></Route>
				<Route path="/bannder" component={Bannder}></Route>
			*/}

		</div>
	</BrowserRouter>,document.getElementById('root')
);
registerServiceWorker();

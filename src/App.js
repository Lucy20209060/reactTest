import React from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';

import Index 		from './components/index/index'
import Classify 	from './components/classify/index';
import Car 			from './components/car/index';
import Mine 		from './components/mine/index';
import Login 		from './components/login/index';
import FluxTest 	from './components/fluxTest/index';
import ReduxTest 	from './components/reduxTest/index'
import About 		from './components/about/index'
import Diff 		from './components/diff/index'

// 登录标志
const loginSign = true

export default class App extends React.Component{  

	render(){
		return(
			<Router>
				<div style={{height:'100%'}}>
				
					<Route exact path="/" render={ () => ( <Redirect to="/index" /> ) } />

					<Route path="/index" component={ loginSign ? Index : Login } />

				    <Route path="/classify" component={ loginSign ? Classify : Login } />

				    <Route path="/car/:id" component={ loginSign ? Car : Login } />

				    <Route path="/mine" component={ loginSign ? Mine : Login } />

					<Route path="/fluxTest" component={ loginSign ? FluxTest : Login } />

					<Route path="/reduxTest" component={ loginSign ? ReduxTest : Login } />

				    <Route path="/login" component={Login} />

				    <Route path="/about" component={About} />

				    <Route path="/diff" component={Diff} />

			    	{/*
				    <Route path="/404" component={About} />
				    <Redirect from='*' to='/404' />

			    	*/}

				</div>
			</Router>
		)
	}
}

import React from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';

import Index 		from './components/index/index'
import Classify 	from './components/classify/index';
import Car 			from './components/car/index';
import Mine 		from './components/mine/index';
import Login 		from './components/login/index';
import News 		from './components/news/index';
import ReduxTest 	from './components/reduxTest/index'
import About 		from './components/about/index'

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

					<Route path="/news" component={ loginSign ? News : Login } />

					<Route path="/reduxTest" component={ loginSign ? ReduxTest : Login } />

				    <Route path="/login" component={Login} />

				    <Route path="/about" component={About} />

				</div>
			</Router>
		)
	}
}

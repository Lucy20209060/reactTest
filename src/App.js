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

import $ from 'jquery'

// 登录标志
let loginSign = true
let tem = []

$.ajax({
	type: "GET",
	url: "/api.php?s=api/category/getlevel1",
	data: {},
	dataType: "json",
	async:false,
	success: function(data){
		console.log(data)	
		loginSign = false

		tem = [
			{
				path:'/index',
				component:Index
			},
			{
				path:"/car/:id",
				component:Car
			},
			{
				path:"/mine",
				component:Mine
			},
			{
				path:"/fluxTest",
				component:FluxTest
			},
			{
				path:"/reduxTest",
				component:ReduxTest
			},
			{
				path:"/login",
				component:Login
			},
			{
				path:"/about",
				component:About
			},
			{
				path:"/diff",
				component:Diff
			}
		]
	}
});


export default class App extends React.Component{  

	render(){
		return(
			<Router>
				<div style={{height:'100%'}}>
				
					<Route exact path="/" render={ () => ( <Redirect to="/index" /> ) } />
					{
						tem.map((item,index) => {
							return (
								<Route key={index} path={item.path} component={item.component}/>
							)
						})
					}

					{/* <Route path="/index" component={ loginSign ? Index : Login  }/>

				    <Route path="/classify" component={ loginSign ? Classify : Login } />

				    <Route path="/car/:id" component={ loginSign ? Car : Login } />

				    <Route path="/mine" component={ loginSign ? Mine : Login } />

					<Route path="/fluxTest" component={ loginSign ? FluxTest : Login } />

					<Route path="/reduxTest" component={ loginSign ? ReduxTest : Login } />

				    <Route path="/login" component={Login} />

				    <Route path="/about" component={About} />

				    <Route path="/diff" component={Diff} /> */}

			    	
				    {/* <Route path="/404" component={About} />*/}
				    <Redirect from='*' to='/404' /> 

			    	

				</div>
			</Router>
		)
	}
}

import React from 'react';

import './index.css'

import json from './index.json'
console.log(json)

export default class Diff extends React.Component{

	constructor(props) {  
        super(props);   
        this.state = {  
            sign:0
        };  
    }  

	//耗时操作放在这里面   
    componentDidMount() {
        this.setState({
			sign: 2
		});
    }

	fun(){
		return 	this.state.sign == 1 
				? <div>aaa</div>
				: <div>bbbb</div>
	}

	render(){ 
		return (
		  	<div>
		  		{this.fun()}
		  	</div>
		) 
	}
}
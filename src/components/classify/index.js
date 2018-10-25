import React from 'react';

import './index.css'

import Bar from '../common/bar/index';

import Header 	from '../header/header';

// import ReactMixin from 'react-mixin'
// import {goback} from '../../tools/common'

import store from '../../redux/store/index'

export default class Classify extends React.Component{
	constructor(){
        super();
        this.state = {
            val:0
        }
    }
	// 父组件传递参数到子组件 通过this.props.userName 接收
	test(event){
		// const par = goback(111);
		console.log(store.getState())
	}

	componentDidMount(){
        
        this.setState({
            val:this.state.val + 1
        },()=>{
			console.log('第一次set结束',this.state.val)
		})
        // console.log('第一次console',this.state.val) // 第1次输出 0

        this.setState({
            val:this.state.val + 1
        },()=>{
			console.log('第二次set结束',this.state.val)
		})
		// console.log('第二次console',this.state.val) // 第2次输出 0
        
        setTimeout(() => {
			console.log('进入setTimeout',this.state.val)
            this.setState({
                val:this.state.val + 1
            },()=>{
				console.log('第三次set结束',this.state.val)
			})
            // console.log('第三次console',this.state.val) // 第3次输出 2

            this.setState({
                val:this.state.val + 1
            },()=>{
				console.log('第三次set结束',this.state.val)
			})
            // console.log('第四次console',this.state.val) // 第4次输出 3
        })
    }

	render(){ 
		return (
		  	<div>
		  		<p onClick={this.test.bind(this)}>Classify</p>
		  		<Header userName="hhhhhh" userId="15" handleChildvalue={this.test.bind(this)} />
		  		<Bar />
		  	</div>
		) 
	}
}

// ReactMixin(Classify.prototype,goback);
import React from 'react';
import { Link } from 'react-router-dom'

import { api_getlist } from '../api';

class Cart extends React.Component{

	constructor(props) {  
        super(props);   
        this.state = {  
            dataSource: '购物车',  
            load:false,  
            text:[]  
        };  
    }  

	//耗时操作放在这里面   
    componentDidMount() {
        this.getNet();  
        // 路由信息 在this.props.match中
        console.log(this.props.match.params.id)
    }

	getNet(){ 
		fetch(api_getlist).then(response => response.json())  
        .then(res => {  
            // console.log(res.data); 
            this.setState({
                text:res.data,
                dataSource:res.data[0].region
            }) 

            console.log(this.state.text)
        })  
        .catch((error) => {  
            console.log("error");  
        });  
 
    }  

	render(){
        // 循环输出的两种方式
        return(
            <div>
                <span>{this.state.dataSource}</span>
                {
                    this.state.text.map((e,index) => {
                        return (
                            <p key={index}>{e.region}{index}</p>
                        )
                    })
                }
                <li><Link to="/mine">mine</Link></li>
            </div>
        )
    }; 
}


export default Cart;
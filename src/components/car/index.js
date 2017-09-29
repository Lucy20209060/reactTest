import React from 'react';
import './index.css'
import Bar from '../common/bar/index';
import { api_getlist,goods } from '../../api';

export default class Car extends React.Component{  
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

        this.searchcategory();


    }
    searchcategory(){	
        fetch(goods.searchcategory,{
        	id:12,
        	page:1,
        	site_id:'',
        	show_site_image:0
        })
		.then(response => response.json())  
        .then(res => { 

            console.log(res)
        })  
        .catch((error) => {  
            console.log("error");  
        });
    }

	getNet(){ 
		fetch(api_getlist)
		.then(response => response.json())  
        .then(res => {  
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

	render() {
		return (
			<div className="Car-wrap">
				{
                    this.state.text.map((e,index) => {
                        return (
                            <p key={index}>{e.region}{index}</p>
                        )
                    })
                }
				<Bar/>
			</div>
		);
	}
}
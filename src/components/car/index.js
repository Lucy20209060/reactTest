import React from 'react';
import './index.css'
import Bar from '../common/bar/index';
import { api_getlist,goods } from '../../tools/api';

import { get, post } from '../../tools/fetch/index' 

export default class Car extends React.Component{  
	constructor(props) {  
        super(props);   
        this.state = {  
            dataSource: '购物车',  
            load:false,  
            text:[],
            page:1
        };  
    }  

	//耗时操作放在这里面   
    componentDidMount() {
        // this.getNet();  
        // 路由信息 在this.props.match中
        console.log(this.props.match.params.id)

        // this.searchcategory();


        // post(goods.searchcategory, {
        // // get(goods.searchcategory, {
        //     id:12,
        //     page:1,
        //     site_id:'',
        //     show_site_image:0
        // }).then(res => {
        //     return res.json()
        // }).then(json => {
        //     console.log(json)
        // })
    }



    searchcategory(){	
        /*
            原生fetch操作 post 
            get操作只能将参数拼接在url中
        */
		// fetch(goods.searchcategory,{
		// 	method: 'POST',
		// 	body: JSON.stringify({
		// 		id:12,
		// 		page:1,
		// 		site_id:'',
		// 		show_site_image:0
		// 	})
		// })
		// .then(response => response.json())  
        // .then(res => { 

        //   console.log(res)
        // })  
        // .catch((error) => {  
        //   console.log("error");  
        // });
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

    onTap(){
        if(this.state.page === 1 ){
            this.setState({
                page: 2
            });
        }else{
            this.setState({
                page: 1
            });
        }
        
    }

	render() {
        // const sty = this.state.page == 1 
        // ? { fontSize:'20px'}
        // : {fontSize:'30px'}

        // console.log(cs({
        //                 'aa':true,
        //                 'bb':this.state.page === 1
        //             }))

        const aa = 'red';

		return (
			<div className="Car-wrap">
                <p 
                    onClick={this.onTap.bind(this)} 
                    style={
                        this.state.page === 1 ? {color:aa} : {color:'pink'}
                    }
                    className={
                        `${this.state.page === 1 ? 'AA' : 'BB'} CC DD`
                    }
                >{this.state.page}</p>
                <p>{[888,<span key={0}>&copy;</span>,<i key={1}>9999</i>]}</p>
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
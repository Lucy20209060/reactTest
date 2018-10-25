import React from 'react';
import './index.css'

import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'

export default class Dnd extends React.Component{

	// 设置默认状态 可以修改 this.state
	constructor(props) {
        super(props);
        this.state = {
        	
    	};
    }

    // 组件即将渲染
    componentWillMount() {
        
    }



    // 创建虚拟DOM
	render(){


		





		return (
		  	// <ul>
		  	// 	<li>
				// 		<span>11</span>
				// 		<span>12</span>
				// 		<span>13</span>
				// 	</li>
				// 	<li>
				// 		<span>21</span>
				// 		<span>22</span>
				// 		<span>23</span>
				// 	</li><li>
				// 		<span>31</span>
				// 		<span>32</span>
				// 		<span>33</span>
				// 	</li>
				// </ul>
				
				<DragDropContextProvider backend={HTML5Backend}>
				<div>
					<div style={{ overflow: 'hidden', clear: 'both' }}>
						<Dustbin />
					</div>
					<div style={{ overflow: 'hidden', clear: 'both' }}>
						<Box name="Glass" />
						<Box name="Banana" />
						<Box name="Paper" />
					</div>
				</div>
			</DragDropContextProvider>
		) 
	}
}
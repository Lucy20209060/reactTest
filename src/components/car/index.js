import React from 'react';
import './index.css'
import Bar from '../common/bar/index';

export default class Car extends React.Component{  
	render() {
		return (
			<div className="Car-wrap">
				Car
				<Bar/>
			</div>
		);
	}
}
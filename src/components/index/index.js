import React from 'react';
import cs from 'classnames';
import './index.css';
import Bar from '../common/bar/index';

const tem = 'banner'
let classN = cs({
	'class1':true,
	'class2':false,
	[`class-${tem}`]:typeof tem === 'string' ? true : false
})
console.log(classN)


export default class Index extends React.Component{

	render(){ 
		return (
		  	<div>
		  		<i className={classN}>index page</i>
		  		<Bar />
		  	</div>
		) 
	}
}

/*
安装
npm install classnames

import cs from 'classnames'
const tem = cs('foo', 'bar'); // 'foo bar'
const tem = cs({ foo: true }, { bar: true }); // 'foo bar'

let Tem = 'primary';
cs({ [`btn-${Tem}`]: true }); // 'btn-primary'


*/
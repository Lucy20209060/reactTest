/**
 * 
 * @authors 卢超
 * @date    2017-06-10
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import App from './App';
import LogRocket from 'logrocket';
import 'antd/dist/antd.css';


// 基础css , iconfont.css , rem.css
import './tools/reset/reset.css';
import './tools/font/iconfont.css';
import './tools/reset/rem';

LogRocket.init('3mufmj/my-app');

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,document.getElementById('root')
);
registerServiceWorker();

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './src/components/App'
import SignIn from './src/components/SignIn'
import Giphy from './src/components/Giphy'

render((
	<Router history={hashHistory}>
		<Route path="/" component={SignIn}/>
		<Route path="/app" component={App}/>
		<Route path="/giphy" component={Giphy}/>
	</Router>
), document.getElementById('app'))
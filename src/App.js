import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ViewOne from './ViewOne';
import ViewTwo from './ViewTwo';
import Landing from './Landing';
import './App.css';

const FourOhFour = () => <h1>404</h1>;

const App = () =>
	<BrowserRouter>
		<div className="app">
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/view1" component={ViewOne} />
				<Route exact path="/view2" component={ViewTwo} />
				<Route component={FourOhFour} />
			</Switch>
		</div>
	</BrowserRouter>;

export default App;

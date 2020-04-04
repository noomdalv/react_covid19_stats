import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App/App';
import Footer from './components/Footer/Footer';
import DisplayCountry from './containers/DisplayCountry/DisplayCountry';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Route path="/" exact component={App} />
					<Route
						path="/:country"
						component={DisplayCountry} />
			</Router>
			<Footer />
		</Provider>,
  document.getElementById('root'),
);

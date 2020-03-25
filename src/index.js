import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log("hi from index", store.getState());

ReactDOM.render(
	<Provider store={store}>
  	<App />
	</Provider>,
  document.getElementById('root'),
);

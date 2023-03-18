import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reminders from "./reducers";

const store = createStore(reminders);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
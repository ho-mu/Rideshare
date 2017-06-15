import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Provider } from 'react-redux'
import './index.css';
import './css/nm/fonts.css';
import './css/nm/icons.css';
import './css/nm/main.css';


import { createStore } from 'redux'
import reducer from './reducers/reducers'

let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = () => ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);

render()
store.subscribe(render);


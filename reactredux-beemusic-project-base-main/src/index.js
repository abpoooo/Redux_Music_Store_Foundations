import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Provider} from "react-redux"
import reducers from "../../../React-Redux/reactredux-beemusic-project-base-main/src/reducers";
import {createStore} from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    // {/*  StrictMode forced to make the React render twice*/}

);

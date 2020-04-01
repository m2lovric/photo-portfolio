import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Gallery from './Gallery';
import Posts from './Posts';

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="/" component={Gallery} exact={true}/>
      <Route path="/posts" component={Posts}/>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes ,document.getElementById('root'));

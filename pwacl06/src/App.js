import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './routes/home/Home';
import PageHeader from '../src/components/cHeader/PageHeader';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useParams

} from "react-router-dom";



function App() {
  return (
    <div className="App">
            <div id="pageHeader"> <PageHeader></PageHeader> </div>
            <div id="pageToolbar"></div>
            <div id="pageContent"></div>
            <div id="pageFooter">footer</div>
    </div>
  );
}

export default App;
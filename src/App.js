import './App.css';

/* connect bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Link, Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './FrontPages/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/home' component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;

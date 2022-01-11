import './App.css';

/* connect bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Link, Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './Pages/FrontPages/Home/Home';
import Header from './Components/Header/Header';
import Explore from './Pages/Explore/Explore';
import ReviewForm from './Pages/ReviewForm/ReviewForm';
import NotFound from './Pages/NotFoundPage/NotFound';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/explore' component={Explore}></Route>
        <Route path='/feedback' component={ReviewForm}></Route>
        <Route path='/*' component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;

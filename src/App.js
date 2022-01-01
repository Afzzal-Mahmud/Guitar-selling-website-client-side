import './App.css';
import {BrowserRouter as Router, Link, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';

/* connect bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Link, Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './Pages/FrontPages/Home/Home';
import Header from './Components/Header/Header';
import Explore from './Pages/Explore/Explore';
import ReviewForm from './Pages/ReviewForm/ReviewForm';
import NotFound from './Pages/NotFoundPage/NotFound';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/LogIn/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/explore' component={Explore}></Route>

        {/* add review and explore section to private route */}
        <PrivateRoute path='/feedback'>
          <ReviewForm/>
        </PrivateRoute>
        
        <PrivateRoute path='/cart'>
          <Cart/>
        </PrivateRoute>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Route path='/login' component={LogIn}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/*' component={NotFound}></Route>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;

import './App.css';

import NavBar from './components/nav-bar/NavBar';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import HomeView from './views/Home/Home';
import CategoryView from './views/Category/Category';


function App() {
  
  return (
    <Router>
        <NavBar/>
        <Switch>
          <Route path="/" component={HomeView} exact/>
          <Route path="/category/:categoryId" component={CategoryView} exact/>
          <Redirect from="" to="/"/>
        </Switch> 
    </Router>
  );
}

export default App;


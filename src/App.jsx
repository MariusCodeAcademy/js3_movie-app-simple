import './App.css';
import { Route, Redirect, Switch } from 'react-router';

import Navbar from './components/navBar';
// Pages
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFound from './pages/404';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/not-found" exact component={NotFound}></Route>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </div>
  );
}

export default App;

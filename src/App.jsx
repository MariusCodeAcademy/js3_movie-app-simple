import './App.css';
import { Route } from 'react-router';

import Navbar from './components/navBar';
// Pages
import HomePage from './pages/home';
import AboutPage from './pages/about';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/about" component={AboutPage}></Route>
      <Route path="/" exact component={HomePage}></Route>
    </div>
  );
}

export default App;

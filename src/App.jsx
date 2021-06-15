import './App.css';
import { Route } from 'react-router';

// Pages
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage}></Route>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;

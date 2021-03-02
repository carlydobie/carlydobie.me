import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import './App.css';
import Navbar from './components/core/navbar.js'

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Router>
        <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

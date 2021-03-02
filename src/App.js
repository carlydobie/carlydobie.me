import { HashRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage.js';
// import AboutMe from './pages/aboutme.js';
// import WorkExperience from './pages/workexperience.js';
// import CurrentProjects from './pages/currentprojects.js';
// import ContactInfo from './pages/contactinfo.js';
import ComingSoon from './pages/comingsoon.js';
import NotFound from './pages/404.js';
import './App.css';
import Navbar from './components/core/navbar.js'

function App() {
  return (
    <div className="App">
    <Navbar/>
      <HashRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/aboutme" component={ComingSoon} />
            <Route exact path="/workexperience" component={ComingSoon} />
            <Route exact path="/currentprojects" component={ComingSoon} />
            <Route exact path="/contactinfo" component={ComingSoon} />
            <Route component={NotFound} />
            {/* <Redirect from='*' to="/" /> */}
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

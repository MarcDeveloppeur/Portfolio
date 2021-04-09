import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Acceuil from './Pages/Acceuil';
import Competence from './Pages/Competence';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
    <Router>
          <Switch>
             <Route exact path="/" component={Acceuil}/>
             <Route path="/Competence" component={Competence}/>
             <Route path="/Portfolio" component={Portfolio}/>
             <Route path="/Contact" component={Contact}/>
             <Route path="/Services" component={Services}/>
             <Route component={NotFound}/>
          </Switch>
    </Router>
    </div>
  );
}

export default App;

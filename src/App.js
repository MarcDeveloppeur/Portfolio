import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Acceuil from './Pages/Acceuil';
import Competence from './Pages/Competence';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
    <Router>
          <Route exact path="/" component={Acceuil}/>
          <Route path="/Competence" component={Competence}/>
          <Route path="/Portfolio" component={Portfolio}/>
          <Route path="/Contact" component={Contact}/>
    </Router>
    </div>
  );
}

export default App;

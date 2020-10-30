import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path='/' render={() => <Home/>} />
        <Route exact path='/signin' render={() => <SigninPage/>} />
      </Switch>
    </Router>
  );
}

export default App;

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import GlobalStyle from './GlobalStyles';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

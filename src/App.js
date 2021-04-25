import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Notes from './pages/Notes';
import Create from './pages/Create';

function App() {
  return (
    <Container>
      <Router>
        <CssBaseline />
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

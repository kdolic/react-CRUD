import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className='main'>
      <a href='/'><h2 className='main-header' style={{ marginBottom: 50 }}>React CRUD Operations</h2></a>
      <Route exact path='/'>
        <Link to='/create'><Button style={{ marginBottom: 20, width: 100 }} className='ui inverted button'>CREATE</Button></Link>
        <Link to='/read'><Button className='ui inverted button' style={{ width: 100 }}>READ</Button></Link>
      </Route>
    <div>
      <Route exact path='/create' component={Create} />
    </div>
    <div style={{ marginTop: 20 }}>
      <Route exact path='/read' component={Read} />
    </div>
        <Route path='/update' component={Update} />
    </div>
  </Router>
  );
}

export default App;

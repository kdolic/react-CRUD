import './App.css';
import Create from './components/Create';

function App() {
  return (
    <div className='main'>
      <h2 className='main-header'>React CRUD Operations</h2>
      <div>
        <Create/>
      </div>
    </div>
  );
}

export default App;

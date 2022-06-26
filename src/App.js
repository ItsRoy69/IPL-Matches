import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Table from './pages/Table';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/table' element={<Table />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;

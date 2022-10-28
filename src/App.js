import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Swap from './pages/Swap';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Swap/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

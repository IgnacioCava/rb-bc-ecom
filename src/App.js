import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import AdminPanel from './pages/Admin/AdminPanel';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admin' element={<AdminPanel/>}/>
      </Routes>
    </div>
  );
}

export default App;

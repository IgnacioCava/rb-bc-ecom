import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;

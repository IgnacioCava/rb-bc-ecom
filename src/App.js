import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import AdminPanel from './pages/Admin/AdminPanel';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './pages/Admin/Components/Sidebar/Sidebar';
import CreateProduct from './pages/Admin/Sections/Create Product/CreateProduct';
import ProductList from './pages/Admin/Sections/ProductList/ProductList';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admin' element={<AdminPanel/>}>
          <Route path='dashboard' element={<div>Dashboard</div>}/>
          <Route path='users' element={<div>Users</div>}/>
          <Route path='products' element={<ProductList/>}/>
          <Route path='addproduct' element={<CreateProduct/>}/>
          <Route path='*' element={<div>Page not found</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

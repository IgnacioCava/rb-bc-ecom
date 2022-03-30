import './App.css';
import Homepage from './pages/Homepage/Homepage';
import AdminPanel from './pages/Admin/AdminPanel';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import CreateProduct from './pages/Admin/Sections/Create Product/CreateProduct';
import ProductList from './pages/Admin/Sections/ProductList/ProductList';
import React from 'react';
import EditProduct from './pages/Admin/Sections/Edit Product/EditProduct';
import useStore from './Store';

export default function App() {

  const [currentContext, AppContext] = useStore()

  return (
    <div className="App">
        <Navbar/>
        <AppContext.Provider value={currentContext}>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/admin' element={<AdminPanel/>}>
              <Route index path='*' element={<ProductList/>}/>
              <Route path='addproduct' element={<CreateProduct action='create'/>}/>
              <Route path='edit/:id' element={<EditProduct/>}/>
            </Route>
          </Routes>
        </AppContext.Provider>
      </div>
  );
}

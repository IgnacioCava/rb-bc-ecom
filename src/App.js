import './App.css';
import Homepage from './pages/Homepage/Homepage';
import AdminPanel from './pages/Admin/AdminPanel';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import CreateProduct from './pages/Admin/Sections/Create Product/CreateProduct';
import ProductList from './pages/Admin/Sections/ProductList/ProductList';
import React, {useReducer, useMemo} from 'react';
import EditProduct from './pages/Admin/Sections/Edit Product/EditProduct';

export const AppContext = React.createContext()

const initialState = []
const productReducer = (state, action) => {
  switch (action.type) {

    case 'addProduct':
      return [...state, {...action.productData, disabled: false, id: state.length}];

    // I disable them instead of removing so that I can still see them in the admin's product list
    // Normal users won't be able to see disabled products
    case 'toggleProduct': 
      let toggle = state.find(product=>product.id === action.id)
      toggle.disabled=!toggle.disabled
      return [...state];

    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(productReducer, initialState);

  const currentContext = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={currentContext}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/admin' element={<AdminPanel/>}>
            <Route index path='*' element={<ProductList/>}/>
            <Route path='addproduct' element={<CreateProduct/>}/>
            <Route path='edit/:id' element={<EditProduct/>}/>
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

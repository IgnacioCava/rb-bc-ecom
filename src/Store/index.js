import {useReducer, useMemo, createContext} from 'react';

export const AppContext = createContext()

const initialState = []
const productReducer = (state, action) => {
  switch (action.type) {
    case 'addProduct':
      return [...state, {...action.productData, disabled: false, id: state.length}];

    case 'editProduct':
      state[action.productData.id] = action.productData
      return [...state]

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

export default function useStore(){
  const [state, dispatch] = useReducer(productReducer, initialState)
  const currentContext = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return [currentContext, AppContext]
}
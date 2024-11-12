import { ADDING, REMOVE } from "../Actions/ActionType";

 const initialState ={
    cart : [],
 }
 function Reducer(state = initialState, action) {
  switch (action.type) {
    case ADDING:
      const itemExist = state.cart.some(item => item.id === action.payload.id);

      if (!itemExist) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map(item => 
            item.id === action.payload.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
          ),
        };
      }
      case REMOVE:
        return{
          ...state,cart : state.cart.filter(item => item.id != action.payload)
        }
    default:
      return state;
  }
}

export default Reducer
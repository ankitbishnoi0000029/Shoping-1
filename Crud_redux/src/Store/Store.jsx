import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../Reducers/Reducer";
export const Store = configureStore({
  reducer: {
    count: Reducer,  // Key is 'count' here, not 'Reducer'
  }
});


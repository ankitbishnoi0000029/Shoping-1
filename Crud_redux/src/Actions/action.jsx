// Correctly export the Add action creator
import { ADDING ,REMOVE } from "./ActionType";

export const addtocart = (val) => {
    return {
      type: ADDING,
     payload : val,
    };
  };
  
 export const removetocart = (id) =>{
  return {
    type : REMOVE,
    payload : id
  }
 }
  
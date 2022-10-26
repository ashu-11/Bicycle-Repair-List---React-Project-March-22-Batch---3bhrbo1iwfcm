/*
reducer is defined here and is exproted.
This reducer should handle all the actions.
Example of how to use reducer is as follows:*/

import {v4 as uuid} from "uuid"
// intial useState
const initialState={
  //array of object
  items:[],
  item:{owner:"",model:"",description:"",resolved:false},
  editMode:false
};

const listReducer = (state =initialState,action) => {

  switch(action.type){

    case 'repairAdded': 
      action.payload.id=uuid();
      action.payload.resolved=false;
      return {...state,items:state.items.concat([action.payload]),
      item:{owner:"",model:"",description:""},
      editMode:false
      };
      
    
    case 'actionType2':
      return changedState2;

    default: 
      return state;
    }
  
export default reducer;

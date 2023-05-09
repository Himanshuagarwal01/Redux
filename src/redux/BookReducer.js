import { buy_book,sell_book } from "./Booktypes";
const initialstate={
  NumberOfBooks:20
}

const BookReducer=(state=initialstate,action)=>{
    switch(action.type){
      case buy_book:
        return {
          ...state,NumberOfBooks:state.initialstate-1
        }

        case sell_book:
          return {
            ...state,NumberOfBooks:state.initialstate+1
          }
          
        default : return state
    }
   
}
export default BookReducer;

//redux store---------->


//store entier aplication has the one store only 
//responsible to store state of application
//get state() method gives access to state it holds 
//dispatch(action) method allow state to updated.
//it has subscribe(listener) method as well by which we can register listeners.

//this method accept function (listener) method as well by which execute anytime when the state in redux store changes.
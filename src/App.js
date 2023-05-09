import React from "react";

import { Provider } from "react-redux";
import store from "./redux/Store";
import BookContainer from "./redux/BookContainer";

function App() {
  return (
    <>
      <Provider store={store}>
        <BookContainer />
      </Provider>
    </>
  );
}

export default App;

//redux is a predictable state container and javascript apps .
// Redux is a library for javascript applications .
//you can use redux with React, or with other view library (angular vue etc).
//redux is state container
// state container ->
//redux is used to solve the problem of props drilling in the react on large projects.

//redux is introduced earlier than the hooks
//react and redux both are independent

// -------core concepts of redux---------

// 1.Store -> holds the state of your application
//2.Action-> Describe the changes in the state of your application .
//Reducer-> Actually carries out the state transition depending on the action .
//Reducer is a function that excepts the action as insterection to add 2
// shop ----->shopkeeper---->customer
// store      Reducer        Action

// rules of redux
// 1. the state of your application is stored in an object tree within within a single store .{
//   numberofbooks:10
// }

//2.only way to change the state is to emit an action, an object describing wahat happened .
// {type:"buyBook"} here type is the property that describes the action to be performed to change the state
// 3.to specify how the state tree is transformed by actions, we write pure reducer.

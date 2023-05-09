import {configureStore} from '@reduxjs/toolkit'
import BookReducer from './BookReducer';

const store=configureStore({reducer:BookReducer})

export default store;










//createStore requires an parameter that is reducer
//createStore is function used to create store
//we you in place of createStore that is configureStore


// what is redux?
// A single store containing "global" state
// Dispatching plain object actions to the store when something happens in the app
// Pure reducer functions looking at those actions and returning immutably updated state
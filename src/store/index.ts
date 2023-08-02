import { configureStore } from '@reduxjs/toolkit';

import checkoutReducer from './checkout';
import customerReducer from './customer';


const store = configureStore({
  reducer: { 
    checkout: checkoutReducer,
    customer: customerReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;

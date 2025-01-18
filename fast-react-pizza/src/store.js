import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  //* if we have just one slice in the entire app so we directly pass that slice in the reducer
  //? reducer: userReducer,
  // But if we have multiple slices like userReducer, postsReducer, commentsReducer, .... so we need to pass each one of them as a key-value pair in the reducer object of the store as bellow:
  reducer: {
    user: userReducer,
    cart: cartReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
  },
});

export default store;

/* 
 *
 *
 *
 *
 *

When you pass a single reducer directly (like userReducer) to the configureStore function, it becomes the only reducer in the store, managing the entire state. This approach works well for simple apps with only one slice, but it doesn't scale when you have multiple slices to manage.

To handle multiple slices, you need to use the reducer object in configureStore. This allows you to:

Assign each slice a unique key.
Combine multiple reducers under the hood.
*/

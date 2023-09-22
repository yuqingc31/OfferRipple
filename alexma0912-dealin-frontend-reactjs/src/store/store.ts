import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../reducers/tokenReducer';

const store = configureStore({
  reducer: {
    auth: tokenReducer,
  },
});

export default store;

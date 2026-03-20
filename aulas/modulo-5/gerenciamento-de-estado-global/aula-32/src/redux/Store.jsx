import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import shopReducer from './ShopSlice';

export default configureStore({
    reducer:{
        user: userReducer,
    },
    reducer:{
        shop: shopReducer,
    }
})
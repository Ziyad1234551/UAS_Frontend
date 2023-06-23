import React from 'react'
import dataReducer from './DataSlice';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer:{
        provinces:dataReducer,
    }
});
 export default store;
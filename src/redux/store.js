import { configureStore } from '@reduxjs/toolkit'
import AppReducer from './slices/app'

export default configureStore({
    reducer: {
        app: AppReducer
    }
});
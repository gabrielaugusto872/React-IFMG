import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './TaskSlicer'

export default configureStore({
    reducer:{
        tasks: taskReducer
    }
})
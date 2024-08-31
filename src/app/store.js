//      Counter store

// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../feature/counter/counterSLice'

// export const store = configureStore({
//     reducer: {
//         counter: counterReducer
//     }
// })



//  Post slice
import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../feature/posts/PostSlice'
import userReducer from '../feature/users/userSlice'

export const store = configureStore({
    reducer: {
        posts: postReducer,
        users: userReducer
    }
})
import { configureStore } from '@reduxjs/toolkit'

import auth from "./userReducer";
import posts from './postReducer';
export const makeStore = () => {
  return configureStore({
    reducer: { auth,posts
      }
  })
}
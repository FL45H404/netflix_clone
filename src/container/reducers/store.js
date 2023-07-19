import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './Slice'
export default configureStore({
  reducer: {
      movies:movieReducer,
  },
})

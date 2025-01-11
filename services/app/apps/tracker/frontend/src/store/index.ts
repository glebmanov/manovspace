import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { appSlice } from 'store/slices/appSlice'

const rootReducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
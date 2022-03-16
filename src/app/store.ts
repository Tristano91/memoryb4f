import { configureStore } from '@reduxjs/toolkit';
import memoryReducer from '../features/memory/memorySlice';

export const store = configureStore({
    reducer: {
      memory: memoryReducer
    }
  });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
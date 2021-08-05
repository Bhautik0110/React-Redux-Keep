import { configureStore } from '@reduxjs/toolkit';
import keepSlice from './components/keepSlice';

export default configureStore({
  reducer: {
    keep: keepSlice,
  },
});

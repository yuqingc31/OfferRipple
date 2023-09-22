import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  auth: {
    id: string;
    token: string;
  };
}

const tokenSlice = createSlice({
  name: 'auth',
  initialState: {
    id: localStorage.getItem('id') || '',
    token: localStorage.getItem('token') || '',
  },
  reducers: {
    LOGIN: (state, action: PayloadAction<{ id: string; token: string }>) => {
      // console.log(action.payload);
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('id', action.payload.id);
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    LOGOUT: (state) => {
      localStorage.removeItem('token');
      state.token = '';
      localStorage.removeItem('id');
      state.id = '';
    },
  },
});

export const { LOGIN, LOGOUT } = tokenSlice.actions;
export default tokenSlice.reducer;

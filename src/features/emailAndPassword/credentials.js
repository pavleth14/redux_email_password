// credentialsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    resetCredentials(state) {
      state.email = '';
      state.password = '';
    },
  },
});

export const { setEmail, setPassword, resetCredentials } = credentialsSlice.actions;

export default credentialsSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean,
    name: string,
}

const initialAuthState = {
    isAuthenticated: false,
    name: '',
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state: AuthState, action: PayloadAction<string>) {
          state.isAuthenticated = true;
          state.name = action.payload
    },
    logout(state: AuthState) {
        state.isAuthenticated = false;
        state.name = '';
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

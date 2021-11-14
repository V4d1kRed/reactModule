import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  login: false,
  registration: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setLogin(state) {
      state.login = true;
    },
    setRegistration(state) {
      state.registration = true;
    },
  }
});

export const {setCurrentUser, setLogin, setRegistration} = userSlice.actions;
export default userSlice.reducer;

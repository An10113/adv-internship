import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  signupModal: false,
  loginModal: false,
};
const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignupModal: (state) => {
      state.signupModal = true;
    },
    closeSignupModal: (state) => {
      state.signupModal = false;
    },
    openLoginModal: (state) => {
      state.loginModal = true;
    },
    closeLoginModal: (state) => {
      state.loginModal = false;
    },
  },
});
export const {openLoginModal, closeLoginModal, openSignupModal, closeSignupModal} = ModalSlice.actions

export default ModalSlice.reducer
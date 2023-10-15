import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginModal: false,
};
const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.loginModal = true;
    },
    closeLoginModal: (state) => {
      state.loginModal = false;
    },
  },
});
export const {openLoginModal, closeLoginModal} = ModalSlice.actions

export default ModalSlice.reducer
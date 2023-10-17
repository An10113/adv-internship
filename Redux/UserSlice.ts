import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state:any, action) => {
        state.email = action.payload.email
    },
    signoutUser : (state:any) => {
        state.email = null
    }
  }
});

export const {setUser, signoutUser} = userSlice.actions

export default userSlice.reducer
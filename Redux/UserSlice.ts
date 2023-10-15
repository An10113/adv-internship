import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    plan: "basic"
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state:any, action) => {
        state.email = action.payload.email
        state.plan = action.payload.plan
    },
    signoutUser : (state:any) => {
        state.email = null
        state.plan = null
    }
  }
});

export const {setUser, signoutUser} = userSlice.actions

export default userSlice.reducer
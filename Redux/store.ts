import { configureStore } from '@reduxjs/toolkit'
import ModalSlice from './ModalSlice'

export default configureStore({
  reducer: {
    modal: ModalSlice,
  }
})
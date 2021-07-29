import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface AuthProps {
  text: string
}

const initialState: AuthProps = {
  text: '',
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    actionInput: (state, {payload}: PayloadAction<string>) => {
      state.text = payload
    },
  },
})

export const action = auth.actions
export default auth.reducer

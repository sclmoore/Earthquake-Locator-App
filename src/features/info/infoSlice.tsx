import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InfoState {
    info: object
}

const initialState: InfoState = {
    info: {title:'', place:'', mag:''},
}

export const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setInfo: (state, action: PayloadAction<object>) => {
            state.info = action.payload
            console.log("setInfo called")
            console.log(state.info)
        }
    }
})

export const { setInfo } = infoSlice.actions

export const selectInfo = (state:any) => { console.log("selectInfo called. OBject below");console.log(state.info); return state.info }

export default infoSlice.reducer
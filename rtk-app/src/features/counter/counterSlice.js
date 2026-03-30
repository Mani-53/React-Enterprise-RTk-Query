import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0
}
export const counterSlice = createSlice(
    {
        name: "counterslice",
        initialState,
        reducers: {
            inc: (state) => {
                state.count++
            },
            dec: (state) => {
                state.count--
            }
        }
    }
)
export const { inc, dec } = counterSlice.actions
const counterReducer = counterSlice.reducer
export default counterReducer
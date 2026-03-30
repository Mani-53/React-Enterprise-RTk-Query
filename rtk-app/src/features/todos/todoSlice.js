import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos: ["mani", "teja"]
}
export const todoSlice = createSlice({
    name: "todoslice",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deltodo: (state, action) => {
            state.todos.splice(action.payload,1)
        },
        updatetodo:(state,action)=>{
           
        }
    }
})
export const {addtodo,deltodo,updatetodo}=todoSlice.actions;
const todoReducer=todoSlice.reducer
export default todoReducer
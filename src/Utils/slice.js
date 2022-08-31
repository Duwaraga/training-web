import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "User",
    initialState: {
        User: [],
    },

    reducers: {
        detailList(state, action) {},

        postAdded(state,action) {
            console.log(action.payload);
        },

        saveTodo(state, action){
            state.User = action.payload;
        }
    }
})

export default slice;
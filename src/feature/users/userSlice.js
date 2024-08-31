import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", name: "mohan" },
    { id: "1", name: "durga" },
    { id: "2", name: "mohandurga" },
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users
export default usersSlice.reducer
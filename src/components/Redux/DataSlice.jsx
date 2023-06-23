import {createSlice} from "@reduxjs/toolkit"
import data from "../../utils/constants/provinces"

const dataSlice= createSlice({
    name:"data slice",
    initialState:{

        provinces:data

    }
})
const dataReducer = dataSlice.reducer;

export default dataReducer;
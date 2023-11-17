import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  keyword: "",
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload]
    },
    sortDataFunc: (state, action) => {
      state.data = [...state.data.sort((a, b) => action.payload == "asc" ? a.price - b.price : action.payload == "desc" ? b.price - a.price : null)]
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter(dt => dt.id != action.payload)]
    },
    updateDataFunc: (state, action) => {
      state.data = [...state.data.map(dt => dt.id == action.payload.id ? ({ ...dt, ...action.payload }) : dt)]
    },
    searchDataFunc: (state, action) => {
      state.keyword = action.payload
    }
  },
})

export const { createDataFunc, deleteDataFunc, updateDataFunc, sortDataFunc, searchDataFunc } = dataSlice.actions

export default dataSlice.reducer
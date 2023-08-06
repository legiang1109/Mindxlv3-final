import { createSlice } from "@reduxjs/toolkit";
export const jobSlice = createSlice({
  name: "job",
  initialState: {
    input: "",
    listJobs: [],
    filter: true,
  },
  reducers: {
    setJob: (state, action) => {
      state.input = action.payload;
    },
    addJob: (state, action) => {
      state.listJobs = [...state.listJobs, action.payload];
    },
    editJob: (state, action) => {
      state.listJobs[action.payload].complete =
        !state.listJobs[action.payload].complete;
    },
    editFilter: (state) => {
      state.filter = !state.filter;
    },
  },
});

export const { setJob, addJob, editJob, editFilter } = jobSlice.actions;

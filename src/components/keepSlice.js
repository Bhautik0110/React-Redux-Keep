// Slice of store

import { createSlice } from "@reduxjs/toolkit";

function initKeep() {
  const keeps = localStorage.getItem("keeps");
  if (!keeps) {
    localStorage.setItem("keeps", "");
    return [];
  } else {
    return keeps.split(",");
  }
}

// async function demo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, 5000);
//   })
// }

const keepSlice = createSlice({
  name: "keep",
  initialState: {
    hasOpenModal: false,
    data: initKeep(),
  },
  reducers: {
    addToKeep: (state, action) => {
      state.data.unshift(action.payload);
      localStorage.setItem("keeps", state.data.toString());
      state.hasOpenModal = !state.hasOpenModal;
    },
    deleteFromKeep: (state, action) => {
      state.data.splice(action.payload, 1);
      localStorage.setItem("keeps", state.data.toString());
      // await demo();
    },
    modal: (state) => {
      state.hasOpenModal = !state.hasOpenModal;
    },
  },
});

export const { modal, addToKeep, deleteFromKeep } = keepSlice.actions;
export default keepSlice.reducer;

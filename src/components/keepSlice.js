// Slice of store

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

function initKeep() {
  const keeps = localStorage.getItem("keeps");
  if (!keeps) {
    localStorage.setItem("keeps", "");
    return [];
  } else {
    return keeps.split(",");
  }
}

function initFeedback() {
  const feedback = localStorage.getItem("feedback");
  if (feedback) {
    return feedback;
  } else return false;
}

const keepSlice = createSlice({
  name: "keep",
  initialState: {
    hasOpenModal: false,
    data: initKeep(),
    feedback: initFeedback(),
    locale: "ENGLISH",
  },
  reducers: {
    // Keep in mind Reducer must be pure, side-effect free, and synchronous.
    // Means we can't fetch() inside reducer.
    // Way 1: We can do in useEffect inside fetch(), effect with subscription.
    // Thunk is function, called after some done
    // Use Higher order function
    // function saveToDB(data) => dispatch(actions...)

    addToKeep: (state, action) => {
      state.data.unshift(action.payload);
      localStorage.setItem("keeps", state.data.toString());
      state.hasOpenModal = !state.hasOpenModal;
    },
    deleteFromKeep: (state, action) => {
      state.data.splice(action.payload, 1);
      localStorage.setItem("keeps", state.data.toString());
    },
    modal: (state) => {
      state.hasOpenModal = !state.hasOpenModal;
    },
    feedback: (state, action) => {
      state.feedback = action.payload;
      localStorage.setItem("feedback", state.feedback);
    },
    changeLanguage: (state) => {
      const languages = ["ENGLISH", "ગુજરાતી"];
      const index = languages.indexOf(state.locale);
      if (index === 1) state.locale = languages[0];
      else state.locale = languages[1];
    },
  },
});

// Only for demo purpose to generate interval
async function demoVerdictRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 100);
  });
}

// This prefix (keep/async-feedback) when we use extra reduxer
// https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createasyncthunk
export const giveFeedback = createAsyncThunk(
  "keep/async-feedback",
  async (verdict, { dispatch }) => {
    try {
      await demoVerdictRequest();
      dispatch(keepSlice.actions.feedback(verdict));
    } catch (e) {
      console.log(e);
    }
  }
);

export const { modal, addToKeep, deleteFromKeep, changeLanguage } =
  keepSlice.actions;
export default keepSlice.reducer;

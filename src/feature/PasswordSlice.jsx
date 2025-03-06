import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  password: "",
  errorMessage: "",
};

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setPassword(state, action) {
      state.password = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const { setPassword, setErrorMessage } = passwordSlice.actions;
export default passwordSlice.reducer;

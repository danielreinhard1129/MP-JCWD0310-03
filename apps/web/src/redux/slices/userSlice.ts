import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: number;
  email: string;
  username: string;
  reff?: string;
  refferal: string;
}

const initialState = {
  id: 0,
  username: "",
  email: "",
  refferal: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.refferal = action.payload.refferal;
    },

    logoutAction: (state) => {
      state.id = 0;
      state.username = "";
      state.email = "";
      state.refferal = "";
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;

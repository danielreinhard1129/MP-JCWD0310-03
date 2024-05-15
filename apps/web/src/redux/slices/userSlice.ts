import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: number;
  email: string;
  username: string;
  reff?: string;
  refferal: string;
  role: string;
}

const initialState = {
  id: 0,
  username: "",
  email: "",
  refferal: "",
  role: "",
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
      state.role = action.payload.role;
    },

    logoutAction: (state) => {
      state.id = 0;
      state.username = "";
      state.email = "";
      state.refferal = "";
      state.role = "";
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;

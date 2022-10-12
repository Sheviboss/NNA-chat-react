import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfileData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProfileData } = ProfileSlice.actions;

export default ProfileSlice.reducer;

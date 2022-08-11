import { createSlice } from '@reduxjs/toolkit';

const initialState = { message: null };

const notifSlice = createSlice({
  name: 'notif',
  initialState,
  reducers: {
    setNotif(state, action) {
      const newNotif = action.payload;
      return { message: newNotif };
    },
    removeNotif(state, action) {
      return { message: null };
    },
  },
});

export const { setNotif, removeNotif } = notifSlice.actions;
export default notifSlice.reducer;

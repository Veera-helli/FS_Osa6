import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Note! This is a Notification!';

const notifSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
});

export const { changeMessage } = notifSlice.actions;
export default notifSlice.reducer;

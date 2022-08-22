import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const notifSlice = createSlice({
  name: 'notif',
  initialState,
  reducers: {
    setNotif(state, action) {
      const newNotif = action.payload;
      return newNotif;
    },
    removeNotif(state, action) {
      return null;
    },
  },
});

export const { setNotif, removeNotif } = notifSlice.actions;

export const setNotification = (content, seconds) => {
  return (dispatch) => {
    const time = 1000 * seconds;
    dispatch(setNotif(content));
    setTimeout(() => {
      console.log('In timeout');
      dispatch(removeNotif());
    }, time);
  };
};

export default notifSlice.reducer;

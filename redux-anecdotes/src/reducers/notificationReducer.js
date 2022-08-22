import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const notifSlice = createSlice({
  name: 'notif',
  initialState,
  reducers: {
    setNotif(state, action) {
      return { ...state, notif: action.payload };
    },
    removeNotif(state, action) {
      return { ...state, notif: null };
    },
    setID(state, action) {
      return { ...state, id: action.payload };
    },
    clearID(state, action) {
      clearTimeout(state.id);
      return { ...state, id: null };
    },
  },
});

export const { setNotif, removeNotif, setID, clearID } = notifSlice.actions;

export const setNotification = (content, seconds) => {
  return (dispatch) => {
    dispatch(clearID());
    const time = 1000 * seconds;
    dispatch(setNotif(content));
    const id = setTimeout(() => {
      console.log('In timeout');
      dispatch(removeNotif());
    }, time);
    dispatch(setID(id));
  };
};

export default notifSlice.reducer;

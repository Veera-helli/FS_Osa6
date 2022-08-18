import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

const getId = () => (100000 * Math.random()).toFixed(0);

export const newAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: getId(),
      votes: 0,
    },
  };
};

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload;
      return state
        .map((anecdote) =>
          anecdote.id !== id
            ? anecdote
            : { ...anecdote, votes: anecdote.votes + 1 }
        )
        .sort((a, b) => b.votes - a.votes);
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { voteAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes.sort((a, b) => b.votes - a.votes)));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const newVote = (id, votedAnecdote) => {
  return async (dispatch) => {
    await anecdoteService.update(id, votedAnecdote);
    dispatch(voteAnecdote(id));
  };
};

export default anecdoteSlice.reducer;

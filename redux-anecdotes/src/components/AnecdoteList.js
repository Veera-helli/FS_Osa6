import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotif, removeNotif } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';

const AnecdoteList = (props) => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const anecdoteFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const vote = async (id, content) => {
    const anecdote = anecdotes.find((a) => a.id === id);
    const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
    await anecdoteService.update(id, changedAnecdote);
    dispatch(voteAnecdote({ id, changedAnecdote }));

    dispatch(setNotif(`voted for: ${content}`));
    setTimeout(() => {
      dispatch(removeNotif());
    }, 5000);
    // console.log('voted', id);
  };

  return (
    <>
      {anecdotes
        .filter((anecdote) =>
          anecdote.content.toLowerCase().includes(anecdoteFilter)
        )
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id, anecdote.content)}>
                vote
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default AnecdoteList;

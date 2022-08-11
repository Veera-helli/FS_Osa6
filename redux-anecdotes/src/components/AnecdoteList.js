import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotif, removeNotif } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

  const vote = (id, content) => {
    dispatch(voteAnecdote(id));
    dispatch(setNotif(`voted for: ${content}`));
    setTimeout(() => {
      dispatch(removeNotif());
    }, 5000);
    console.log('voted', id);
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
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

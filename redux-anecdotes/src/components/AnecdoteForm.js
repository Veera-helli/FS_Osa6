import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotif, removeNotif } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = (props) => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(createAnecdote(newAnecdote));

    dispatch(setNotif(`Added a new anecdote: ${content}`));
    setTimeout(() => {
      // console.log('Timeout!');
      dispatch(removeNotif());
    }, 5000);
    console.log('new anecdote: ', content);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button style={{ marginTop: '10px', marginBottom: '20px' }}>
          create
        </button>
      </form>
    </>
  );
};

export default AnecdoteForm;

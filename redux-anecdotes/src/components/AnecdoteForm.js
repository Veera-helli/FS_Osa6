import { useDispatch } from 'react-redux';
import { newAnecdote } from '../reducers/anecdoteReducer';
import { setNotif, removeNotif } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(newAnecdote(content));
    dispatch(setNotif(`Added a new anecdote: ${content}`));
    setTimeout(() => {
      console.log('Timeout!');
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

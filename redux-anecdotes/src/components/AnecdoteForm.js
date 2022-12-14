import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import Button from 'react-bootstrap/Button';

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    props.createAnecdote(content);

    props.setNotif(`Added a new anecdote: ${content}`, 5);
    console.log('new anecdote: ', content);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <Button
          variant='outline-warning'
          style={{ marginTop: '10px', marginBottom: '20px' }}
          type='submit'
        >
          create
        </Button>
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAnecdote: (value) => {
      dispatch(createAnecdote(value));
    },
    setNotif: (value) => {
      dispatch(setNotification(value));
    },
  };
};
export default connect(null, mapDispatchToProps)(AnecdoteForm);

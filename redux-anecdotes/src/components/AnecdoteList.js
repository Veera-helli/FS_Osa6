import { useSelector, useDispatch } from 'react-redux';
import { newVote } from '../reducers/anecdoteReducer';
import { setNotif, removeNotif } from '../reducers/notificationReducer';

import Button from 'react-bootstrap/Button';

const AnecdoteList = (props) => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const anecdoteFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const vote = async (id, content) => {
    const anecdote = anecdotes.find((a) => a.id === id);
    const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
    // await anecdoteService.update(id, changedAnecdote);
    dispatch(newVote(id, changedAnecdote));

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
          <div key={anecdote.id} className='align-items-center'>
            <div className='col-md-8 mt-3 align-self-center'>
              {anecdote.content}
            </div>
            <div className='d-flex align-items-center'>
              <div className='text-dark'>Votes </div>
              <div className='ms-1 fs-4 text-dark'>{anecdote.votes}</div>
            </div>
            <div className='align-self-center'>
              <Button
                className='m-2'
                variant='outline-warning'
                onClick={() => vote(anecdote.id, anecdote.content)}
              >
                vote
              </Button>
            </div>
          </div>
        ))}
    </>
  );
};

export default AnecdoteList;

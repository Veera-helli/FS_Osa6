import { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import ConnectedAnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { initializeAnecdotes } from './reducers/anecdoteReducer';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <div className='container m-5'>
      <h2 className='display-3'>Anecdotes</h2>
      <Notification />
      <AnecdoteForm />
      <Filter />
      <ConnectedAnecdoteList />
    </div>
  );
};

export default App;

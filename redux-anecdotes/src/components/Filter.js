import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    console.log(event.target.value);
    dispatch(setFilter(event.target.value.toLowerCase()));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style} className='fs-5'>
      Filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;

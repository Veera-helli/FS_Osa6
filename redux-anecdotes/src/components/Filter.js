import { connect } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = (props) => {
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    // console.log(event.target.value);
    props.setFilter(event.target.value.toLowerCase());
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

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (value) => {
      dispatch(setFilter(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(Filter);

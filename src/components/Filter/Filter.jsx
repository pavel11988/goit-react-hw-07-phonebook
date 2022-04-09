import PropTypes from 'prop-types';
import actions from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

//components-styled
import { Label, Search } from './Filter.styled';

function Filter() {
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  return (
    <Label>
      Filter by name:
      <Search
        type="text"
        value={filter}
        onChange={event => dispatch(actions.changeFilter(event.target.value))}
      />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;

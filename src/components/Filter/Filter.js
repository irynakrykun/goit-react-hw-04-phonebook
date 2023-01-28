import PropTypes from 'prop-types';
import { LabelTitle, Input } from './Filter.styled';

const Filter = ({ onChange, value }) => {
  return (
    <>
      <LabelTitle>
        Find contacts by name
        <Input type="text" name="filter" onChange={onChange} value={value}></Input>
      </LabelTitle>
    </>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value:  PropTypes.string.isRequired,
   
};
export default Filter;

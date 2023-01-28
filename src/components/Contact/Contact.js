import { Description, Button } from '../Contact/Contact.styled';
import PropTypes from 'prop-types';

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <Description>{name}</Description>
          <Description>{number}</Description>
          <Button type="button" onClick={()=>onDelete(id)}>Delete</Button>
    </>
  );
};
Contact.propTypes = {
  contact:PropTypes.shape({
    id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default Contact;

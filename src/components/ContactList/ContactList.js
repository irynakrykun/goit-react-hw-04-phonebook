import Contact from 'components/Contact/Contact';
import { List, ListItem } from './ContactList.styled';
import PropTypes from 'prop-types';
const ContactList = ({ items,onDelete }) => {
  return (
    <List>
      {items.map((item, id) => (
        <ListItem key={id}>
          <Contact contact={item} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};
ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default ContactList;

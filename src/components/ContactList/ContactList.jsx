import PropTypes from 'prop-types';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';

//components-styled
import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

function ContactList() {
  const filter = useSelector(state => state.phonebook.filter);
  const { data } = useFetchContactsQuery();

  const filteredContacts = filter
    ? data.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : data;

  return (
    <List>
      {filteredContacts &&
        filteredContacts.map(({ id, name, tel }) => (
          <Contact key={id} id={id} name={name} tel={tel} />
        ))}
      <li></li>
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;

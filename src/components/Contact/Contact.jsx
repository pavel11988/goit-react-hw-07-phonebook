import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contactsSlice';
//components-styled
import {
  ContactContainer,
  Info,
  Name,
  Telephone,
  Button,
} from './Contact.styled';

export const Contact = ({ id, name, tel }) => {
  const [deleteContact, { isLoading: deliting }] = useDeleteContactMutation();

  return (
    <ContactContainer>
      <Info>
        <Name>Name: {name}</Name>
        <Telephone>Tel: {tel}</Telephone>
      </Info>
      <Button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={deliting}
      >
        {deliting ? 'Deliting' : 'Delete'}
      </Button>
    </ContactContainer>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};

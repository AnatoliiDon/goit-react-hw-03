import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
const ContactList = ({ contactInfo, deleteProfile }) => {
  return (
    <ul className={css.contactList}>
      {contactInfo.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              deleteProfile={deleteProfile}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

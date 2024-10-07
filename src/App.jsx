import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactInfo from './contactListInfo.json';
import { nanoid } from 'nanoid';

const App = () => {
  const [filter, setFilter] = useState('');
  const [users, setUsers] = useState(() => {
    const stringifiedUsers = localStorage.getItem('users');
    const parsedUsers = JSON.parse(stringifiedUsers) || ContactInfo;
    return parsedUsers;
  });
  const filteredUsers = users.filter(user =>
    user.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
  );

  useEffect(() => {
    const stringifiedUsers = JSON.stringify(users);
    localStorage.setItem('users', stringifiedUsers);
  }, [users]);

  const onAddProfile = formData => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    setUsers(prevState => [...prevState, finalUser]);
  };

  const onDeleteProfile = profileId => {
    console.log(profileId);
    const updatedUsers = users.filter(user => user.id !== profileId);

    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addProfile={onAddProfile} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList
        contactInfo={filteredUsers}
        deleteProfile={onDeleteProfile}
      />
    </div>
  );
};

export default App;

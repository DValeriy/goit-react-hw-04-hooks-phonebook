import s from "./App.module.css";

import { useEffect, useState, useMemo } from "react";
import shortid from "shortid";

import Form from "../Form";
import ContactList from "../ContactList";
import Filter from "../Filter";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [lang, setLang] = useState("ru");

  useEffect(() => {
    try {
      const loadContacts = JSON.parse(localStorage.getItem("contacts"));
      if (Array.isArray(loadContacts)) setContacts(loadContacts);
    } catch (error) {
      console.error(error);
      setContacts([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitForm = ({ name, number }) => {
    contacts.some(
      ({ name: contactName }) =>
        contactName.toLocaleLowerCase() === name.toLocaleLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : setContacts([...contacts, { name, number, id: shortid.generate() }]);
  };
  const handleFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const removeItem = (id) => {
    setContacts(contacts.filter(({ name }) => name !== id));
  };

  const filteredFn = () => {
    console.log("ok");
    return filter
      ? contacts.filter(({ name }) => {
          return name.toLowerCase().includes(filter.toLowerCase());
        })
      : contacts;
  };
  const filteredContacts = filteredFn();
  // test usememo
  // const filteredContacts = useMemo(() => filteredFn(), [filter, contacts]);
  return (
    <div className="App">
      <h1 className={s.title}>Phonebook</h1>
      <Form handleSubmitForm={handleSubmitForm} />
      {/* test usememo
      <<select
        name="lang"
        value={lang}
        onChange={({ target: { value } }) => {
          setLang(value);
        }}
      >
        <option value="ru">ru</option>
        <option value="en">en</option>
      </select> */}
      <h2 className={s.title}>Contacts</h2>
      <Filter handleFilter={handleFilter} value={filter} />
      <ContactList contacts={filteredContacts} removeItem={removeItem} />
    </div>
  );
};

export default App;

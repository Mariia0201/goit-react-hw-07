import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";


const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  return (
    <ul className={css.contact}>
       {(filter
        ? contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
        : contacts
      ).map(({ id, name, number }) => (
        <li key={id} className={css.contactItem} key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;










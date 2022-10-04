import logo from './logo.svg';
import './App.css';
import allContacts from "./contacts.json";
import {useState} from "react"

function App() {
  const fiveContacts = allContacts.slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);
  const addRandomContact = () => {
    const n = allContacts.length;
    const currentLength = contacts.length;
    const index = Math.floor(Math.random()*(n - currentLength) + currentLength )
    const chosenContact = allContacts[index];
    console.log(chosenContact);
    const newArr = [...contacts];
    newArr.push(chosenContact);
    setContacts(newArr);
  }

  const sortByName = () => {
    const newArr = [...contacts];
    newArr.sort((a,b) => a.name.localeCompare(b.name));
    setContacts(newArr);
  }

  const sortByPopularity = () => {
    const newArr = [...contacts];
    newArr.sort((a,b) => a.popularity < b.popularity);
    setContacts(newArr);
  }

  const deleteContact = (id) => {
    const newArray = contacts.filter(contact => {
      return contact.id !== id;
    })
    setContacts(newArray);
  }
  console.log(contacts);
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className='buttons'>
      <button onClick={addRandomContact}>Add new contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {contacts.map((contact) => {
          return (
            <tbody>
            <tr>
              <td>
                <img src={contact.pictureUrl} height={100}></img>
              </td>
              <td>
                <p>{contact.name}</p>
              </td>
              <td>
                <p>{contact.popularity.toFixed(2)}</p>
              </td>
              <td>
                {contact.wonOscar ? <p>🏆</p> : <p></p>}
              </td>
              <td>
                {contact.wonEmmy ? <p>🏆</p> : <p></p>}
              </td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
        </tbody>
          )
        })}
        
      </table>
    </div>
  );
}

export default App;

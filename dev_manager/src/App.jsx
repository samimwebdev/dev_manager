import { useState } from "react";
import { Container } from "react-bootstrap";
import AddContact from "./conatcts/AddContact";
import Contacts from "./conatcts/Contacts";
import Header from "./layouts/Header";
import { v4 as uuidv4 } from "uuid";

const initialContacts = [
  {
    id: 1,
    first_name: "Hilary",
    last_name: "Cromb",
    email: "hcromb0@amazon.com",
    gender: "Male",
    profession: "VP Quality Control",
    image:
      "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "20/03/2000",
    bio: "eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
  },
  {
    id: 2,
    first_name: "Nanine",
    last_name: "Grabham",
    email: "ngrabham1@arizona.edu",
    gender: "Female",
    profession: "Analog Circuit Design manager",
    image:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "07/08/1987",
    bio: "nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
  },
  {
    id: 3,
    first_name: "Suzette",
    last_name: "Turn",
    email: "sturn2@theguardian.com",
    gender: "Female",
    profession: "Senior Editor",
    image:
      "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "29/05/1996",
    bio: "habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer",
  },
  {
    id: 4,
    first_name: "Calv",
    last_name: "Branchflower",
    email: "cbranchflower3@google.ca",
    gender: "Male",
    profession: "Recruiter",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "01/10/1993",
    bio: "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis",
  },
  {
    id: 5,
    first_name: "Connor",
    last_name: "Cromb",
    email: "ccromb4@slashdot.org",
    gender: "Male",
    profession: "Research Associate",
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "05/06/1978",
    bio: "aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
  },
  {
    id: 6,
    first_name: "Filip",
    last_name: "Scutching",
    email: "fscutching5@chicago.com",
    gender: "Male",
    profession: "Chief Design Engineer",
    image:
      "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "11/09/1977",
    bio: "enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
  },
  {
    id: 7,
    first_name: "Amby",
    last_name: "Culleton",
    email: "aculleton6@phpbb.com",
    gender: "Male",
    profession: "Project Manager",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "01/07/1995",
    bio: "nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede",
  },
  {
    id: 8,
    first_name: "Silvester",
    last_name: "Ivashnikov",
    email: "sivashnikov7@mayoclinic.com",
    gender: "Male",
    profession: "Programmer III",
    image:
      "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "11/08/1983",
    bio: "vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet",
  },
  {
    id: 9,
    first_name: "Leland",
    last_name: "Janaway",
    email: "ljanaway8@wiley.com",
    gender: "Female",
    profession: "Financial Analyst",
    image:
      "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "26/07/1994",
    bio: "rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo",
  },
  {
    id: 10,
    first_name: "Inglis",
    last_name: "Euplate",
    email: "ieuplate9@hostgator.com",
    gender: "Male",
    profession: "Assistant Professor",
    image:
      "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "08/10/1976",
    bio: "gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam",
  },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  const addContact = (contact) => {
    let contactToAdd = {
      id: uuidv4(),
      ...contact,
    };
    setContacts([contactToAdd, ...contacts]);
  };

  return (
    <>
      <Header />
      <Container>
        <AddContact addContact={addContact} />
        <Contacts deleteContact={deleteContact} contacts={contacts} />
      </Container>
    </>
  );
}

export default App;

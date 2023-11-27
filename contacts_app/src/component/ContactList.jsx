import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const ContactList = ({ onContactSelected }) => {
  // states
  const [contacts, setContacts] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  // Handling when contact is clicked
  const contactClicked = (buttonID) => {
    setActiveButton((prevActiveButton) =>
      prevActiveButton === buttonID ? null : buttonID
    );
  };
  // Handling when contactis searched
  const handleSearch = (event) => {
    const searchInput = event.target.value;
    setSearchValue(searchInput);
    //  filtering contacts by regex search with searchInput, if no result  = []
    const searchingContact = searchInput
      ? contacts.filter((contact) =>
          new RegExp(searchInput, "i").test(contact.name)
        )
      : [];
    // while searching, if there is result then first contact is selected otherwhise null
    const selectedContact =
      searchingContact.length > 0 ? filteredContacts[0] : null;

    //setting states
    setActiveButton(selectedContact?.id || null);
    onContactSelected(selectedContact);
  };

  // fetching fake /users (10 users) data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();
        // sort them a -> b
        setContacts(jsonData.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    new RegExp(searchValue, "i").test(contact.name)
  );

  return (
    <div>
      <Box
        sx={{
          p: 1,
          m: 1.5,
        }}
      >
        <TextField
          fullWidth
          id="standard-basic"
          variant="standard"
          label="Search"
          value={searchValue}
          onChange={handleSearch}
        />
      </Box>

      {filteredContacts.map((contact) => (
        <Box
          sx={{
            p: 1,
            m: 1.5,

            borderRadius: "7px",
          }}
          key={contact.id}
          bgcolor={activeButton === contact.id ? "rgb(49,97,199)" : ""}
          onClick={() => {
            onContactSelected(contact);
            contactClicked(contact.id);
          }}
        >
          <Typography variant="body2" sx={{ p: 1 }}>
            {contact.name}
          </Typography>
        </Box>
      ))}
    </div>
  );
};

export default ContactList;

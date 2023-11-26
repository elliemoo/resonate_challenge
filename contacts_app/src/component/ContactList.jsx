import { Button, ToggleButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const ContactList = ({ onContactClick }) => {
  const [contacts, setContacts] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  //   const buttonClicked = (buttonID) => {
  //     console.log(buttonID);
  //     setActiveButton((prevActiveButton) =>
  //       prevActiveButton === buttonId ? null : buttonId
  //     );
  //   };
  const buttonClicked = (buttonID) => {
    console.log(buttonID);
    setActiveButton((prevActiveButton) => {
      prevActiveButton === buttonID ? null : buttonID;
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();
        setContacts(jsonData.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //   const sortedContacts = contacts.sort((a, b) => a.name.localCompare(b.name));
  //   console.log(sortedContacts)

  return (
    <div>
      {contacts.map((contact) => (
        <Button
          sx={{
            width: "100%",
            justifyContent: "flex-start",
            color: "white",
          }}
          key={contact.id}
          //   bgcolor={activeButton === contact.id ? "black" : "black"}

          onClick={() => {
            onContactClick(contact);
            buttonClicked(contact.id);
          }}
        >
          <Typography variant="body2" sx={{ p: 1 }}>
            {contact.name}
          </Typography>
        </Button>
      ))}
    </div>
  );
};

export default ContactList;

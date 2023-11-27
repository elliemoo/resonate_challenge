import { Box, Container, Stack } from "@mui/material";
import DetailCard from "../component/DetailCard";
import ContactList from "../component/ContactList";
import { useState } from "react";

const Home = () => {
  // state for keep track of selected contact object, it will be parsed to detail component
  const [selectedContact, setSelectedContact] = useState(null);
  // handling click
  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Container>
          <Stack
            direction="row"
            sx={{
              mt: 4,
            }}
          >
            <Box
              sx={{
                width: "30%",
                bgcolor: "rgb(38,40,42)",
                borderTopLeftRadius: "7px",
                borderBottomLeftRadius: "7px",
              }}
            >
              {/* contact search bar  + list of contacts  */}
              <ContactList onContactSelected={handleContactClick} />
            </Box>
            <Box
              sx={{
                width: "70%",
                bgcolor: "background.secondary",
                borderTopRightRadius: "7px",
                borderBottomRightRadius: "7px",
              }}
            >
              {/* contact information */}
              {/* create card for this section  */}
              <DetailCard selectedContact={selectedContact} />
            </Box>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Home;

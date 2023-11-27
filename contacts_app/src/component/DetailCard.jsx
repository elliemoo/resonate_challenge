import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import { Person } from "@mui/icons-material";

import ContactButtons from "./ContactButtons";
//  name, email,address,phone,compnay

const DetailCard = ({ selectedContact }) => {
  return (
    <Box sx={{ height: "100%" }}>
      {selectedContact ? (
        <Container sx={{ p: 3, height: "100%" }}>
          <Card sx={{ p: 3, height: "100%" }}>
            <Stack sx={{ alignItems: "center" }}>
              <Person sx={{ fontSize: "100px" }} />
              <ContactButtons />
              <CardContent sx={{ mt: 4 }}>
                <Typography variant="h6" component="div">
                  {selectedContact.name}
                </Typography>
                <Typography gutterBottom>
                  Email: {selectedContact.email}
                </Typography>
                <Typography gutterBottom>
                  Phone: {selectedContact.phone}
                </Typography>
                <Typography gutterBottom>
                  Address: {selectedContact.address.suite}{" "}
                  {selectedContact.address.street}{" "}
                  {selectedContact.address.city}
                </Typography>
                {/* <Typography color="textSecondary">
              Company: {selectedContact.company}
            </Typography> */}
              </CardContent>
            </Stack>
          </Card>
        </Container>
      ) : (
        <Container sx={{ pt: 3 }}>
          <Card>
            <Stack sx={{ alignItems: "center" }}>
              <Person sx={{ fontSize: "100px" }} />
              <CardContent>
                <Typography variant="h5" component="div">
                  No results
                </Typography>
              </CardContent>
            </Stack>
          </Card>
        </Container>
      )}
    </Box>
  );
};

export default DetailCard;

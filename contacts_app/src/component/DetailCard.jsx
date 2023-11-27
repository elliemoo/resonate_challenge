import { Card, CardContent, Container, Stack, Typography } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import { Person } from "@mui/icons-material";
//  name, email,address,phone,compnay

const DetailCard = ({ selectedContact }) => {
  return (
    <div>
      {selectedContact ? (
        <Container sx={{ pt: 3 }}>
          <Card>
            <Stack sx={{ alignItems: "center" }}>
              <Person sx={{ fontSize: "100px" }} />
              <CardContent>
                <Typography variant="h5" component="div">
                  {selectedContact.name}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Email: {selectedContact.email}
                </Typography>
                {/* <Typography color="textSecondary" gutterBottom>
              Address: {selectedContact.address}
            </Typography> */}
                <Typography color="textSecondary" gutterBottom>
                  Phone: {selectedContact.phone}
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
    </div>
  );
};

export default DetailCard;

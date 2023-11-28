import { Box } from "@mui/material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import GoogleMap from "google-maps-react-markers";

const Marker = () => (
  <div>
    <AccessibilityIcon sx={{ position: "absolute", color: "orange" }} />
  </div>
);

const MapView = (props) => {
  return (
    <Box sx={{ height: "30vh", width: "100%" }}>
      <GoogleMap
        apiKey="AIzaSyCS5FO2qTANmhkGiHjEIoetzFF__m-6R3Y"
        defaultCenter={props.geo}
        defaultZoom={0}
      >
        <Marker lat={props.geo.lat} lng={props.geo.lng} />
      </GoogleMap>
    </Box>
  );
};

export default MapView;

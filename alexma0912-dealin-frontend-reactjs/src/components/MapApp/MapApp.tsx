import { AppContainer, Title, AddressText } from './styledMapApp';
import { useState } from 'react';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MapApp = ({ location }: { location?: string }) => {
  const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;
  const [latitude, setLatitude] = useState<number>(36);
  const [longitude, setLongitude] = useState<number>(0);
  const encodedAddress = location ? encodeURIComponent(location) : ' ';

  const fetchAddress = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_MAP_KEY}`
      );
      const address = response.data.results[0].geometry.location;
      const currentLatitude = address.lat;
      const currentLongitude = address.lng;

      setLatitude(currentLatitude);
      setLongitude(currentLongitude);
    } catch (error) {
      console.error(error);
    }
  };

  fetchAddress();

  return (
    <AppContainer>
      <Title>
        <h3 className="Nunito-title">Address</h3>
        <AddressText>
          <div>
            <LocationOnIcon sx={{ color: 'rgb(248, 92, 112)' }} />
          </div>
          {decodeURIComponent(encodedAddress)}
        </AddressText>
      </Title>
      <div>
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=640x380&markers=color:red%7Clabel:S%7C62.107733,-145.541936&key=${GOOGLE_MAP_KEY}`}
          alt="google map"
        />
      </div>
    </AppContainer>
  );
};
export default MapApp;

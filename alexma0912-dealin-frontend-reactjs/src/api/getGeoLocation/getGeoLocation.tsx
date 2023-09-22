import axios from 'axios';

export const getLocation = async (): Promise<any> => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://dev-api.offerripple.com';

  const requestLocationPermission = () => {
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((permissionStatus) => {
          if (permissionStatus.state === 'prompt') {
            permissionStatus.onchange = () => {
              if (permissionStatus.state === 'granted') {
                console.log('Permission Granted');
              } else if (permissionStatus.state === 'denied') {
                requestLocationPermission();
              }
            };
          } else if (permissionStatus.state === 'denied') {
            requestLocationPermission();
          }
        })
        .catch((error) => {
          console.error('Error requesting permission:', error);
          requestLocationPermission();
        });
    }
  };
  requestLocationPermission();

  try {
    if (navigator.geolocation) {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      // console.log(position);

      const postal_code = axios
        .get(`${BACKEND_URL}/api/v1/geoLocation`, {
          params: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        })
        .then((response) => {
          console.log(response.data);
          return response.data;
        });

      return postal_code;
    } else {
      console.log('Geolocation is not supported by this browser. Please select suburb manually.');
    }
  } catch (error) {
    console.error(error);
  }
};

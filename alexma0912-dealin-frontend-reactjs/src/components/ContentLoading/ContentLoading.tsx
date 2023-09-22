import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function ContentLoading() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '90vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

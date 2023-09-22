import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const AdminBoardLoading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '80vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default AdminBoardLoading;

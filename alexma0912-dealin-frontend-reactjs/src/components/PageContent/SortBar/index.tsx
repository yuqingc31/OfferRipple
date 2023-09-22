import { Fab, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { SortMenu } from '../SortMenu';
import SubjectIcon from '@mui/icons-material/Subject';
import GridViewIcon from '@mui/icons-material/GridView';
import { useState } from 'react';

enum ContentView {
  LIST,
  GRID,
}

export const SortBar = () => {
  const [view, setView] = useState<ContentView>(ContentView.LIST);
  return (
    <Paper
      elevation={1}
      style={{
        height: '5rem',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <Box height={'100%'} display={'flex'} alignItems={'center'}>
        <Typography marginRight={'5px'}>
          <strong>Search Results: </strong>
        </Typography>
        <Typography marginRight={'auto'} color={'grey'}>
          Showing 1-6 of 20 Listings
        </Typography>
        <SortMenu />
        <Fab
          onClick={() => {
            setView(ContentView.LIST);
          }}
          size={'small'}
          color={view === ContentView.LIST ? 'info' : 'inherit'}
          style={{ marginLeft: '30px', marginRight: '20px' }}
        >
          <SubjectIcon />
        </Fab>
        <Fab
          onClick={() => {
            setView(ContentView.GRID);
          }}
          size={'small'}
          color={view === ContentView.GRID ? 'info' : 'inherit'}
        >
          <GridViewIcon />
        </Fab>
      </Box>
    </Paper>
  );
};

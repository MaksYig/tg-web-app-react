import * as React from 'react';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Paper } from '@mui/material';


export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(selectedIndex);
  };

  const TimeList =["12:50","14:50","18:50","19:45","12:50","14:50","18:50","19:45"]

  return (
    <Grid container margin={0} spacing={1.5} sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {TimeList.map((lable,index)=>(
        <Grid item >
          <Paper elevation={3}>
          <ListItemButton key={index}
            selected={selectedIndex ==={index}}
            onClick={(event) => handleListItemClick(event, {index})}>
            <ListItemText primary={lable} />
          </ListItemButton>
          </Paper>
        </Grid>
        ))}

    </Grid>
  );
}
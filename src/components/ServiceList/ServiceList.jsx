import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';


export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(selectedIndex);
  };

  const ListService =["Обработка бровей","Обработка век","Обработка губ","Коррекция бровей"]

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <Divider />
      <List component="nav" aria-label="main mailbox folders">
        {ListService.map((lable,index)=>(
        <ListItemButton key={index}
          selected={selectedIndex ==={index}}
          onClick={(event) => handleListItemClick(event, {index})}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={lable} />
        </ListItemButton>
        ))}
      </List>
      <Divider />
    </Box>
  );
}
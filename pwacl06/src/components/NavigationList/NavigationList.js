import React, { useEffect, useState } from 'react';
import './NavigationList.css';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// import * as MuiIcons from '@material-ui/icons';

import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function NavigationList() {
  return(
<Box sx={{ width: '12rem', maxWidth: '50vw', bgcolor: '#f4f4f4' }}>
  <List>
    <ListItem >
      <ListItemButton >
          <ListItemIcon>
              {/* <InboxIcon/> */}
              {/* <div>{MuiIcons['Inbox']}</div> */}
            </ListItemIcon>
          <ListItemText primary="Inbox" />
      </ListItemButton>   
    </ListItem>
    <ListItem >
      <ListItemButton>
          <ListItemIcon>
              {/* <DraftsIcon /> */}
              {/* <div>{MuiIcons['Draft']}</div> */}
          </ListItemIcon>
          <ListItemText primary="Drafts" />
      </ListItemButton>
          </ListItem>


  </List>
</Box>
  )
}
export default NavigationList;
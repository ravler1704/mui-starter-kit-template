import React from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {AccountBox, Article, Home, ModeNight, People, Person, Settings, Storefront} from "@mui/icons-material";

const Sidebar = ({mode,setMode}) => {
  return (
    <Box
      flex={1} p={2}
      sx={{ display: { xs: "none", sm: "block" }}}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#el">
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#el">
              <ListItemIcon>
                <Article></Article>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#el">
              <ListItemIcon>
                <People></People>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#el">
              <ListItemIcon>
                <Storefront></Storefront>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#el">
              <ListItemIcon>
                <Person></Person>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#el">
              <ListItemIcon>
                <Settings></Settings>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#el">
              <ListItemIcon>
                <AccountBox></AccountBox>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#el">
              <ListItemIcon>
                <ModeNight></ModeNight>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}></Switch>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;

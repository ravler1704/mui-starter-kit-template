import React, {useState} from 'react';
import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import {Mail, Notifications, Pets} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar) ({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div") (({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box) (({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const UserBox = styled(Box) (({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

function Navbar(props) {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: {xs: "none", sm: "block"} }}>PROFILE</Typography>
        <Pets sx={{ display: {xs: "block", sm: "none"} }}></Pets>
        <Search><InputBase placeholder="search..."></InputBase></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail></Mail>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications></Notifications>
          </Badge>
          <Avatar
            sx={{width: 30, height: 30}}
            src="https://yobte.ru/uploads/posts/2019-11/devushki-v-krasnom-plate-155-foto-142.jpg"
            onClick={ e=> setOpen(true) }
          >
          </Avatar>
        </Icons>
        <UserBox onClick={ e=> setOpen(true) }>
          <Avatar
            sx={{width: 30, height: 30}}
            src="https://yobte.ru/uploads/posts/2019-11/devushki-v-krasnom-plate-155-foto-142.jpg">
          </Avatar>
          <Typography variant="span">Jhon</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;

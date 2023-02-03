import './App.css';
import React, { useState } from 'react'
import { AppBar, Toolbar, Paper, Box, Typography, Avatar, Badge, IconButton, Card, CardContent, Menu, MenuItem, CardActionArea } from '@mui/material'
import { FaBars, FaBell } from 'react-icons/fa'

const placeholders = Array.from({length:7})

function App() {
  const [menuOpen, setMenuOpen] = useState(null);
  const [userMenu, setUserMenu] = useState(null)
  const open = Boolean(menuOpen);
  const userOpen = Boolean(userMenu)
  
  const handleMenu = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuOpen(null);
  };

  const handleUser = (e) => { 
    setUserMenu(e.currentTarget)
  }

  const handleCloseUser = (e) => {
    setUserMenu(null)
  }

  return (
    <div className="App" style={{minHeight:'100vh', height:'100%', background:'radial-gradient(#b2dfdb, #cfd8dc)'}}>
      <AppBar sx={{background:'#3949ab'}}>
        <Toolbar sx={{margin:'0 9vw 0 9vw'}}>
          <IconButton sx={{color:'inherit'}} onClick={handleMenu}>
              <FaBars size={25}/>
          </IconButton>
          <Typography variant="h6" sx={{marginLeft:'1vw'}}>I don't know what this site is called</Typography>
          <IconButton sx={{margin:'0 1vw 0 auto'}}>
            <Badge badgeContent="" variant="dot" color="error"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}>
              <FaBell color='white' />
            </Badge>
          </IconButton>
          <IconButton onClick={handleUser}>
            <Avatar sx={{height:35, width:35}}></Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu sx={{marginTop:'10px', marginLeft:"-5px"}}
        id="main-menu"
        anchorEl={menuOpen}
        open={open}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>Submit A Local Deal</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Does This Need to be a Multipage App</MenuItem>
      </Menu>
      <Menu sx={{marginTop:'6px'}}
        id="user-menu"
        anchorEl={userMenu}
        open={userOpen}
        onClose={handleCloseUser}
      >
        <MenuItem onClick={handleCloseUser}>Activity/Savings</MenuItem>
        <MenuItem onClick={handleCloseUser}>My account</MenuItem>
        <MenuItem onClick={handleCloseUser}>Logout</MenuItem>
      </Menu>
      <Box sx={{height:'80px'}}></Box>
      <Box sx={{margin:'0 10vw 0 10vw'}}>
        <Paper variant="elevation" elevation={6} sx={{height:'20vh', minHeight:'200px', marginBottom:'2vh', position:'relative',
          display:'flex', padding:'20px 20px', overflowX:'auto'}}
        >
          {placeholders.map((item,id)=>
          id % 2 === 1 ?
          <Card sx={{height:'15vh', minHeight:'120px', minWidth:'150px', margin:'0 1vw', wordWrap:'break-word', maxWidth:'10vw'}} key={id} elevation={2}>
            <CardActionArea sx={{height:'100%'}}>
              <CardContent>
                <Typography variant="subtitle2">Deal: --% off</Typography>
                <br />
                <Typography variant="caption">Name of --</Typography>
                <br />
                <Typography variant="caption">-- Logo</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          :
          <Card sx={{height:'15vh', minHeight:'120px', minWidth:'150px', margin:'0 1vw', wordWrap:'break-word', maxWidth:'10vw'}} key={id} elevation={2}>
            <CardActionArea sx={{height:'100%'}}>
              <CardContent>
                <Typography variant="subtitle2">Deal: BOGO on Certain Things</Typography>
                <br />
                <Typography variant="caption">Name of --</Typography>
                <br />
                <Typography variant="caption">-- Logo</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          )}
          <Typography variant="h4" sx={{position:'absolute', bottom:'10px', left:'43%'}}>
            New/Best Deals
          </Typography>
        </Paper>
        <Paper variant="elevation" elevation={6} sx={{height:'20vh', minHeight:'200px', marginBottom:'2vh', position:'relative', display:'flex', padding:'20px 20px'}}>
          <Card sx={{height:'15vh', minHeight:'120px', minWidth:'150px', margin:'0 1vw', background:'#bdbdbd'}} elevation={2}>
              <CardActionArea sx={{height:'100%'}}>
                <CardContent>
                  <Typography variant="caption">Name of Restaurant</Typography>
                  <br />
                  <Typography variant="caption">Restaurant Logo</Typography>
                  <br />
                  <br />
                  <Typography variant="subtitle2">No Current Deals</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{height:'15vh', minHeight:'120px', minWidth:'150px', margin:'0 1vw'}} elevation={2}>
              <CardActionArea sx={{height:'100%'}}>
                <CardContent>
                  <Typography variant="caption">Name of Restaurant</Typography>
                  <br />
                  <Typography variant="caption">Restaurant Logo</Typography>
                  <br />
                  <br />
                  <Typography variant="subtitle2" sx={{wordWrap:'break-word', maxWidth:'10vw'}}>--% Off of long word type text long sentence wrapping</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          <Typography variant="h4" sx={{position:'absolute', bottom:'20px', left:'46%'}}>Favorites</Typography>
        </Paper> 
        <Box sx={{display:'flex', gap:'1vw'}}>
            <Paper variant="elevation" elevation={2} sx={{height:'35vh', position:'relative', width:'20vw'}}>
              <Typography variant="h4" sx={{position:'absolute', bottom:'20px', left:'40%'}}>Filter?</Typography>
            </Paper>
            <Paper variant="elevation" elevation={4} sx={{height:'35vh', width:'59vw', position:'relative'}}>
              <Typography variant="h4" sx={{position:'absolute', bottom:'20px', left:'40%'}}>Google Maps</Typography>
            </Paper>
        </Box>
      </Box>
    </div>
  );
}

export default App;

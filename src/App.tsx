import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import CV from './pages/CV';
import Teachings from './pages/Teachings';
import Projects from './pages/Projects';
import Coursework from './pages/Coursework';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar className='half'>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tony Cui
        </Typography>
        {/* Icon button for the mobile menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {/* Menu items for mobile */}
            <MenuItem component={Link} to='/' onClick={handleCloseNavMenu}>
              <Typography textAlign="center">About</Typography>
            </MenuItem>
            <MenuItem component={Link} to='/CV' onClick={handleCloseNavMenu}>
              <Typography textAlign="center">CV</Typography>
            </MenuItem>
            <MenuItem component={Link} to='/projects' onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Projects</Typography>
            </MenuItem>
            <MenuItem component={Link} to='/teachings' onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Teachings</Typography>
            </MenuItem>
            <MenuItem component={Link} to='/Coursework' onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Coursework</Typography>
            </MenuItem>
          </Menu>
        </Box>
        {/* Buttons for larger screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" component={Link} to='/'>
            About
          </Button>
          <Button color="inherit" component={Link} to='/CV'>
            CV
          </Button>
          <Button color="inherit" component={Link} to='/projects'>
            Projects
          </Button>
          <Button color="inherit" component={Link} to='/teachings'>
            Teachings
          </Button>
          <Button color="inherit" component={Link} to='/Coursework'>
            Coursework
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename='/'>
        <Navbar />
        <br />
        <br />
        <div className='half'>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/CV' element={<CV />} />
            <Route path='/teachings' element={<Teachings />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/Coursework' element={<Coursework />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

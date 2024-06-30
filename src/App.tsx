import './App.scss';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Resume from './pages/Resume';
import Teachings from './pages/Teachings';
import Projects from './pages/Projects';
import { AppBar, Toolbar, IconButton, Typography, Button, } from '@mui/material';

const pages = ['About', 'Resume'];

function Navbar() {
  return (
      <AppBar position="static" color='transparent'>
          <Toolbar className='half'>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Tony Cui
              </Typography>
              <Button color="inherit" component={Link} to='/'> About </Button>
              <Button color="inherit" component={Link} to='/resume'> Resume </Button>
              <Button color="inherit" component={Link} to='/projects'> Projects </Button>
              <Button color="inherit" component={Link} to='/teachings'> Teachings </Button>

          </Toolbar>
      </AppBar>
  );
}

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename='/'>
      <Navbar/>
        <br></br>
        <br></br>

        <div className='half'>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/teachings' element={<Teachings />} />
            <Route path='/projects' element={<Projects />} />
          </Routes> 
        </div>
      </BrowserRouter>
    </div>
   
  );
}

export default App;

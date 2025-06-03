import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservations';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Box,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './components/Navbar';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevOpen) => !prevOpen);
  };

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Réserver', path: '/reservation' },
    { label: 'Menu', path: '/menu' },
    { label: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      {navLinks.map((link) => (
        <Link key={link.path} to={link.path} className="block p-4 text-black hover:underline">
          {link.label}
        </Link>
      ))}
    </Box>
  );

  return (
    <>
      {/* <AppBar position="static" className="bg-blue-600">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MonRestaurant
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-white mx-2 hover:underline">
                {link.label}
              </Link>
            ))}
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservation />} />
         <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="*" element={<h2 className="p-8 text-center">Page non trouvée</h2>} />
      </Routes>
    </>
  );
}

export default App;


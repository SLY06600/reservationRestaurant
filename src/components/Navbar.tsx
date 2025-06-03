import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Réserver', path: '/reservations' },
    { label: 'Menu', path: '/menu' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar className="flex justify-between items-center">
          <Typography variant="h6" className="font-bold text-primary">
            🍽️ Mon Restaurant
          </Typography>

          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="primary"
                className="hover:underline"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="w-64 p-4">
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}

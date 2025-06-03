import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Reservation } from '../types/Reservation';

const Confirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reservation = location.state as Reservation;

  if (!reservation) {
    navigate('/');
    return null;
  }

  return (
    <Container maxWidth="sm" className="py-10 text-center">
      <Typography variant="h4" component="h1" gutterBottom>
        Réservation confirmée !
      </Typography>
      <Typography variant="body1" gutterBottom>
        Merci {reservation.name}, votre réservation pour {reservation.guests} personne(s) le {reservation.date} à {reservation.time} a été enregistrée.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Une confirmation a été envoyée à {reservation.email}.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Retour à l'accueil
      </Button>
    </Container>
  );
};

export default Confirmation;

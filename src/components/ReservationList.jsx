import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function ReservationList({ reservations }) {
  return (
    <Paper className="p-6 mt-8 max-w-xl mx-auto">
      <Typography variant="h6" gutterBottom>📋 Réservations enregistrées</Typography>
      <List>
        {reservations.length === 0 && <Typography>Aucune réservation pour l’instant.</Typography>}
        {reservations.map((r, i) => (
          <ListItem key={i} divider>
            <ListItemText
              primary={`${r.nom} – ${r.date} à ${r.heure}`}
              secondary={`${r.personnes} pers • ${r.email}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

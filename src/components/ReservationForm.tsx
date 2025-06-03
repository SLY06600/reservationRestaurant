import React, { useState } from 'react';
import { TextField, Button, MenuItem, Typography, Paper } from '@mui/material';

const heures = ['12:00', '12:30', '13:00', '19:00', '19:30', '20:00', '20:30'];

interface ReservationFormProps {
  onAdd?: (data: {
    nom: string;
    email: string;
    date: string;
    heure: string;
    personnes: number;
  }) => void;
}

export default function ReservationForm({ onAdd }: ReservationFormProps) {
  const [data, setData] = useState({
    nom: '',
    email: '',
    date: '',
    heure: '',
    personnes: 2,
  });

  interface ReservationData {
    nom: string;
    email: string;
    date: string;
    heure: string;
    personnes: number;
  }

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (onAdd) onAdd(data);
    setData({ nom: '', email: '', date: '', heure: '', personnes: 2 });
  };

  return (
    <Paper className="p-6 max-w-xl mx-auto mt-8">
      <Typography variant="h6" className="mb-4">Réserver une table</Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField label="Nom" name="nom" fullWidth required value={data.nom} onChange={handleChange} />
        <TextField label="Email" name="email" type="email" fullWidth required value={data.email} onChange={handleChange} />
        <TextField label="Date" name="date" type="date" fullWidth required InputLabelProps={{ shrink: true }} value={data.date} onChange={handleChange} />
        <TextField select label="Heure" name="heure" fullWidth required value={data.heure} onChange={handleChange}>
          {heures.map((h) => (
            <MenuItem key={h} value={h}>{h}</MenuItem>
          ))}
        </TextField>
        <TextField label="Nombre de personnes" name="personnes" type="number" fullWidth required inputProps={{ min: 1 }} value={data.personnes} onChange={handleChange} />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Réserver
        </Button>
      </form>
    </Paper>
  );
}


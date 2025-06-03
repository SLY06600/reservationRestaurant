import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simule l'envoi du message
    console.log('Formulaire envoyé :', formData);
    setFormData({ name: '', email: '', message: '' });
    setSnackbarOpen(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      }}
    >

   
    <div className="p-8 max-w-2xl mx-auto backdrop-blur-sm bg-white/80 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Contactez-nous</h1>
      <p className="text-center text-gray-600 mb-8">
        Une question ? Une réservation spéciale ? N'hésitez pas à nous écrire via ce formulaire.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <TextField
          label="Nom"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Adresse e-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          type="email"
        />
        <TextField
          label="Votre message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={4}
        />
        <div className="text-right">
          <Button variant="contained" color="primary" type="submit">
            Envoyer
          </Button>
        </div>
      </form>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSnackbarOpen(false)}>
          Message envoyé avec succès !
        </Alert>
      </Snackbar>
    </div>
    </div>
  );
}

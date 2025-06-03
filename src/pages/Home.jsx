import React from 'react';
import { Typography, Paper } from '@mui/material';

export default function Home() {
  return (
//  <div
//       style={{
//         backgroundImage: "url('https://images.unsplash.com/photo-1600891963935-8430c39f6871?auto=format&fit=crop&w=1600&q=80')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "2rem",
//       }}
//     >
<div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <Paper
        elevation={6}
        className="p-10 max-w-4xl mx-auto text-center"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          padding: { xs: 4, md: 8 },
        }}
      >
        <Typography variant="h4" className="font-bold mb-4" gutterBottom>
          Bienvenue chez Mon Restaurant
        </Typography>
        <Typography variant="body1">
          Réservez votre table en ligne facilement et rapidement. Cuisine raffinée, cadre chaleureux.
        </Typography>
      </Paper>
    </div>
  );
}

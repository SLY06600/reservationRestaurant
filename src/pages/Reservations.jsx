import React, { useState } from 'react';
import ReservationForm from '../components/ReservationForm';
import ReservationList from '../components/ReservationList';

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (res) => {
    setReservations([...reservations, res]);
  };

  return (

       <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      }}
    >

    <div>
      <ReservationForm onAdd={addReservation} />
      <ReservationList reservations={reservations} />
    </div>
    </div>
  );
}

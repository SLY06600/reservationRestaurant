const reserver = require('../src/reservation.js');

describe('Fonction reserver', () => {
  test('crée une réservation valide', () => {
    const result = reserver('Alice', '2025-06-10', 2);
    expect(result).toEqual({
      nom: 'Alice',
      date: new Date('2025-06-10').toISOString(),
      personnes: 2
    });
  });

  test('rejette un nom vide', () => {
    expect(() => reserver('', '2025-06-10', 2)).toThrow('Nom invalide');
  });

  test('rejette une date invalide', () => {
    expect(() => reserver('Bob', 'date-invalide', 2)).toThrow('Date invalide');
  });

  test('rejette un nombre de personnes <= 0', () => {
    expect(() => reserver('Claire', '2025-06-10', 0)).toThrow('Nombre de personnes invalide');
  });
});

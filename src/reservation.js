function reserver(nom, date, personnes) {
  if (!nom || typeof nom !== 'string') throw new Error("Nom invalide");
  if (!date || isNaN(new Date(date))) throw new Error("Date invalide");
  if (typeof personnes !== 'number' || personnes <= 0) throw new Error("Nombre de personnes invalide");

  return {
    nom,
    date: new Date(date).toISOString(),
    personnes
  };
}

module.exports = reserver;

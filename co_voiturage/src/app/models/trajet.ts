export class Trajet {
  id: string;
  lieuDepart: string;
  lieuArrivee: string;
  dateDepart: string;

  constructor(id: string, lieuDepart: string, lieuArrivee: string, dateDepart: string) {
    this.id = id;
    this.lieuDepart = lieuDepart;
    this.lieuArrivee = lieuArrivee;
    this.dateDepart = dateDepart;
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  id: string;
    lieuDepart: string;
    lieuArrivee: string;
    dateDepart: string;

    constructor() {
      this.title = "co-voiturage"
        this.id = "fa1f5f40-be3b-11eb-91ec-7f5875ecfb46";
        this.lieuDepart = "Lyon";
        this.lieuArrivee = "Paris";
        this.dateDepart = "1er juin 2022";

        this.title = "co-voiturage"
        this.id = "nojkd55s4-be3b-11eb-91ec-7f5875ecfb46";
        this.lieuDepart = "Paris";
        this.lieuArrivee = "Oslo";
        this.dateDepart = "18 avril 2022";
    }

}


import { Component } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: 'main-page.component.html'
})
export class MainPageComponent {

  public personajes: Personaje[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewPersonaje(personaje: Personaje):void {
    this.personajes.push(personaje);
  }

  onDeletePersonajeId(index: number):void {
    this.personajes.splice(index, 1);
  }

}

import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css'
})
export class DbzListComponent {

  @Input()
  public listaPersonajes: Personaje[] = [{
      name: 'Trunks',
      power: 10
  }];

  onDeletePersonaje():void {
    // TODO: Emitir el ID del personaje
  }

}

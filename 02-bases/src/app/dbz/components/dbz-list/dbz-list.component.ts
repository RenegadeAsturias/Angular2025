import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  public onDeletePersonajeId: EventEmitter<number> = new EventEmitter();

  public index:number = 0;

  emitDeletePersonajeId():void {
    this.onDeletePersonajeId.emit(this.index);
  }

  onDeletePersonaje(index: number):void {
    // TODO: Emitir el ID del personaje
    this.index = index;
    this.onDeletePersonajeId.emit(this.index);
  }

}

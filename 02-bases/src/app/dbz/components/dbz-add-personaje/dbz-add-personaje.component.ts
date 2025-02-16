import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  standalone: false,
  templateUrl: './dbz-add-personaje.component.html',
  styleUrl: './dbz-add-personaje.component.css'
})
export class DbzAddPersonajeComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    name: '',
    power: 0
  }

  emitPersonaje():void {
    if(this.personaje.name.length === 0) return; // No admitimos personajes sin nombre
    this.onNewPersonaje.emit({...this.personaje});
    this.personaje.name='';
    this.personaje.power=0;
  }

}

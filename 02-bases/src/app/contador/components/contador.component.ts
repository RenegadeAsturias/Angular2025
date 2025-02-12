import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: false,
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  public contador:number = 10;

  incrementar(valor:number):void {
    this.contador += valor;
  }

  reiniciar():void {
    this.contador = 10;
  }
}

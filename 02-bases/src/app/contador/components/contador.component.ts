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

    if(valor>0) this.listadoNumeros.push("Número "+this.contador);
    if(valor<0) this.listadoNumeros.pop();
  }

  reiniciar():void {
    this.contador = 10;
    this.listadoNumeros=[];
  }

  aniadirNuevaOpcion(): void {
    console.log("Aniade opción!");
  }

  public listadoNumeros: string[] = ["INICIO","FIN"];

}

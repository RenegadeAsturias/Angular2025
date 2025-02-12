import { NgModule } from "@angular/core";
import { ListadoComponent } from "./componentes/listado/listado.component";
import { HeroeComponent } from "./componentes/heroe/heroe.component";
import { CommonModule } from "@angular/common";

@NgModule ({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    HeroeComponent,
    ListadoComponent
  ], imports: [
    CommonModule
  ]
})
export class HeroesModule { }


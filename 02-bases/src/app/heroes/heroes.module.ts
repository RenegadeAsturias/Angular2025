import { NgModule } from "@angular/core";
import { ListadoComponent } from "./componentes/listado/listado.component";
import { ContadorComponent } from "../contador/components/contador.component";
import { HeroeComponent } from "./componentes/heroe/heroe.component";

@NgModule ({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    HeroeComponent,
    ListadoComponent
  ]
})
export class HeroesModule { }


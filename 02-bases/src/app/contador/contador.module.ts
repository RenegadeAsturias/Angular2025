import { NgModule } from "@angular/core";
import { ContadorComponent } from "./components/contador.component";

@NgModule ({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ]
})
export class ContadorModule { }

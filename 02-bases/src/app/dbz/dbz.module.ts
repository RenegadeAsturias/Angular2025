import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/dbz-list/dbz-list.component';
import { DbzAddPersonajeComponent } from './components/dbz-add-personaje/dbz-add-personaje.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    DbzAddPersonajeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }

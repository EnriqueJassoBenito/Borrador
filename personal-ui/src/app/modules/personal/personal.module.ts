import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPersonalComponent } from './pages/main-personal/main-personal.component';
import {FormsModule} from "@angular/forms";
import {materialModules} from "../../types/material-modules";



@NgModule({
  declarations: [
    MainPersonalComponent,
  ],
  imports: [
    CommonModule,FormsModule,...materialModules
  ],
  exports: [MainPersonalComponent],
  bootstrap: [MainPersonalComponent],
})
export class PersonalModule { }

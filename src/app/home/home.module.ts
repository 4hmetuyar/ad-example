import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {SharedModule} from "../components/shared.module";



@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class HomeModule { }

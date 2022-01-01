import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AdService} from './service/ad.service';
import {SharedModule} from "./components/shared.module";
import {HomeModule} from "./home/home.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxsModule} from "@ngxs/store";
import {AdState} from "./service";

const STATES = [
  AdState
];

const NGXS_MODULES = [
  NgxsModule.forRoot(STATES),
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...NGXS_MODULES,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    FontAwesomeModule,

  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

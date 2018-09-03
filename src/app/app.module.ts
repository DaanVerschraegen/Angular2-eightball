import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Eightball }  from './eightball;
import { LocalStorageService } from './localStorage.Service';

const appRoutes: Routes = [
  { path: '**', component: Eightball }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,
                RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, Eightball ],
  providers:    [ LocalStorageService ],
})

export class AppModule { }
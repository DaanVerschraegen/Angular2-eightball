import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '**', component: Eightball }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,
                RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, Eightball ]
})

export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { FormsModule } from '@angular/forms';
import { EjNgIFComponent } from './ej-ng-if/ej-ng-if.component';
import { EjNgForComponent } from './ej-ng-for/ej-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    EjNgIFComponent,
    EjNgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

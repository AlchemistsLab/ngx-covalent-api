import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CovalentApiModule } from 'covalent-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CovalentApiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

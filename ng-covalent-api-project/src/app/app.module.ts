import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCovalentApiModule } from 'projects/ngx-covalent-api/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxCovalentApiModule.forRoot({
      configuration: { apiKey: '' },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

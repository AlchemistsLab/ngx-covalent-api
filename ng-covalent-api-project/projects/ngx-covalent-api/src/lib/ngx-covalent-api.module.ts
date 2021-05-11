import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxCovalentApiComponent } from './ngx-covalent-api.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxCovalentApiService } from './ngx-covalent-api.service';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [NgxCovalentApiComponent],
  imports: [HttpClientModule],
  exports: [NgxCovalentApiComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class NgxCovalentApiModule {
  static forRoot(configuration): ModuleWithProviders<NgxCovalentApiModule> {
    console.log(configuration);
    return {
      ngModule: NgxCovalentApiModule,
      providers: [
        NgxCovalentApiService,
        { provide: 'config', useValue: configuration },
      ],
    };
  }
}

import { NgModule } from '@angular/core';
import { CovalentApiComponent } from './covalent-api.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CovalentApiComponent],
  imports: [HttpClientModule],
  exports: [CovalentApiComponent],
})
export class CovalentApiModule {}


# about

A WORK-IN-PROGRESS, DOES NOT WORK YET.

An Angular library for interacting with the Covalent API.

# installation

`npm i ngx-covalent-api --save`

# Usage:

## import the module and add your API key

```

import { NgxCovalentApiModule } from 'projects/ngx-covalent-api/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    NgxCovalentApiModule.forRoot({
      configuration: { apiKey: '' },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


```

## import the service and call an endpoint with your parameters
- call functions with the corresponding parameters

```

import { TokenBalanceItem } from 'projects/ngx-covalent-api/src/lib/models/TokenBalanceItem';
import { NgxCovalentApiService } from 'projects/ngx-covalent-api/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tokenItems: TokenBalanceItem[];

  constructor(private covalentapi: NgxCovalentApiService) {}

  onGetTokens() {
    this.covalentapi
      .getTokenBalanceForAddress(
        '1',
        '0x84ae5ee482a7a4470386555eed41645aaa62f574'
      )
      .subscribe((val) => {
        console.log(val);
        this.tokenItems = val.data.items;
      });
  
    }
  
}


```



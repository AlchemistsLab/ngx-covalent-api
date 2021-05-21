# ngx-covalent-api

An Angular library for interacting with the [Covalent API](https://www.covalenthq.com/docs/api/#overview--introduction)

## installation

`npm i ngx-covalent-api --save`



## Usage:

### Import the module and add your API key

The key will be used by an HTTP-interceptor and added to every request. It is required for making requests against the Covalent API.

```

import { NgxCovalentApiModule } from 'ngx-covalent-api';

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

### Import the service and call an endpoint with your parameters

Call functions with the corresponding parameters.

```

import { TokenBalanceItem } from 'ngx-covalent-api/lib/models/TokenBalanceItem';

import { NgxCovalentApiService } from 'ngx-covalent-api';

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

## Endpoints implemented

- ClassA endpoints
- ClassB endpoints
- Pricing endpoints

- missing: getFarmingStats()

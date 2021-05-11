import { Component } from '@angular/core';
import { TokenBalanceItem } from 'projects/ngx-covalent-api/src/lib/models/TokenBalanceItem';
import { NgxCovalentApiService } from 'projects/ngx-covalent-api/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-covalent-api-project';
  tokenItems: TokenBalanceItem[];

  constructor(private covalentapi: NgxCovalentApiService) {}

  ngOnInit() {}

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

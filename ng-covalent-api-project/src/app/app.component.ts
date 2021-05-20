import { Component } from '@angular/core';
import { TokenBalanceItem } from 'projects/ngx-covalent-api/src/lib/models/ClassA/TokenBalanceItem';
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

  ngOnInit() {
    /*this.covalentapi
      .getLogEventsByContractAddress(
        '1',
        '0xbAF9A5d4b0052359326A6CDAb54BABAa3a3A9643',
        '12150245',
        '12344944'
      )
      .subscribe(
        (val: any) => {
          console.log(val);
          let items = val.data.items;
          let events = items.filter(
            (e) => e.decoded.name == 'DefaultFeeVoteUpdate'
          );
          let sum = 0;
          let totalamount = 0;

          events.forEach((e) => {
            let sum1 =
              Number(e.decoded.params[1].value) *
              Number(e.decoded.params[3].value);
            sum += sum1;
            totalamount += Number(e.decoded.params[3].value);
          });

          let avg = sum / totalamount;
          console.log(avg);
        },
        (err) => {
          console.log(err);
        }
      );*/
  }

  onGetTokens() {
    this.covalentapi
      .getTokenBalancesForAddress(
        '1',
        '0x84ae5ee482a7a4470386555eed41645aaa62f574'
      )
      .subscribe(
        (val) => {
          console.log(val);
          this.tokenItems = val.data.items;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { CovalentApiService } from 'projects/covalent-api/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngx-covalent-api';

  constructor(private covalentapi: CovalentApiService) {
    this.covalentapi
      .getTokenBalanceForAddress(
        '1',
        '0x84ae5ee482a7a4470386555eed41645aaa62f574'
      )
      .subscribe((val) => {
        console.log(val);
      });
  }

  ngOnInit() {}
}

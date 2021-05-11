import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CovalentResponse } from './models/CovalentResponse';
import { TokenBalance } from './models/TokenBalance';

@Injectable({
  providedIn: 'root',
})
export class NgxCovalentApiService {
  apiUrl: String = 'https://api.covalenthq.com/v1/';
  apiKey: string = 'onemillionwallets';

  constructor(@Inject('config') private config: any, private http: HttpClient) {
    console.log(config);
  }

  /**
   *
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address address to be queried
   * @returns
   */
  getTokenBalanceForAddress(chain_id: String, address: String) {
    console.log('getTokenBalance');
    /*const headers = new HttpHeaders({
      //'API-KEY': apiToken,
      Authorization: 'Basic ' + btoa(this.apiKey),
    });*/
    return this.http.get<CovalentResponse<TokenBalance>>(
      this.apiUrl + '' + chain_id + '/address/' + address + '/balances_v2/'
    );
  }
}

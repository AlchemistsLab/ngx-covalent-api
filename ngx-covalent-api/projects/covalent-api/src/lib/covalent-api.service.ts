import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenBalance } from './covalent-api.models.ts/TokenBalance';

@Injectable({
  providedIn: 'root',
})
export class CovalentApiService {
  apiUrl: String = 'https://api.covalenthq.com/v1/';
  apiKey: string = 'onemillionwallets';

  constructor(private http: HttpClient) {}

  getTokenBalanceForAddress(chain_id: String, address: String) {
    console.log('getTokenBalance');
    const headers = new HttpHeaders({
      //'API-KEY': apiToken,
      Authorization: 'Basic ' + btoa(this.apiKey),
    });
    return this.http.get<TokenBalance>(
      this.apiUrl + '' + chain_id + '/address/' + address + '/balances_v2/',
      { headers: headers }
    );
  }
}

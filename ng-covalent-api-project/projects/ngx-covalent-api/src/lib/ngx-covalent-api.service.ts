import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CovalentResponse } from './models/CovalentResponse';
import { Portfolio } from './models/Portfolio';
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

  // ----- CLASS A -----

  /**
   * Return a list of all ERC20 and NFT token balances along with their current spot prices.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address address to be queried
   * @returns
   */
  getTokenBalancesForAddress(chain_id: String, address: String) {
    return this.http.get<CovalentResponse<TokenBalance>>(
      this.apiUrl + '' + chain_id + '/address/' + address + '/balances_v2/'
    );
  }

  /**
   * Given chain_id and wallet address, return wallet value for the last 30 days at 24 hour timestamps.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address address to be queried
   */
  getHistoricalPortfolioValueOverTime(chain_id: String, address: String) {
    return this.http.get<CovalentResponse<Portfolio>>(
      this.apiUrl + '' + chain_id + '/address/' + address + '/portfolio_v2/'
    );
  }

  /**
   * Retrieve all transactions for "address" including their decoded log events. This endpoint does a deep-crawl of the blockchain to retrieve all kinds of transactions that references the "address".
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address address to be queried
   */
  getTransactions(chain_id: String, address: String) {
    /*return this.http.get<CovalentResponse<Transa>>(
      this.apiUrl + '' + chain_id + '/address/' + address + '/portfolio_v2/'
    );*/
  }

  getERC20TokenTransfers() {}

  getBlock(chain_id: String, block_height: String) {
    /*return this.http.get<CovalentResponse<Transa>>(
      this.apiUrl + '' + chain_id + '/block_v2/' + block_height + '/'
    );*/
  }

  // ----- CLASS B -----

  // ----- PRICING ENDPOINTS -----
}

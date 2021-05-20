import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Block } from './models/ClassA/Block';
import { CovalentResponse } from './models/CovalentResponse';
import { Portfolio } from './models/ClassA/Portfolio';
import { Pricing } from './models/Pricing';
import { TokenBalance } from './models/ClassA/TokenBalance';
import { Transactions } from './models/ClassA/Transactions';
import { Volatility } from './models/Volatility';
import { ERC20Transfers } from './models/ClassA/ERC20Transfers';
import { LogEvents } from './models/ClassA/LogEvents';
import { TransactionItem } from './models/ClassA/TransactionItem';

@Injectable({
  providedIn: 'root',
})
export class NgxCovalentApiService {
  apiUrl: String = 'https://api.covalenthq.com/v1/';

  constructor(private http: HttpClient) {}
  // -----------------------------
  // -----------------------------
  // -----------------------------
  // ---------- CLASS A ----------
  // -----------------------------
  // -----------------------------
  // -----------------------------

  /**
   * Return a list of all ERC20 and NFT token balances along with their current spot prices.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address address to be queried
   * @param nft optional - set to true to return ERC721 and ERC1155 assets.
   * @param no_nft_fetch optional - set to true to skip fetching NFT metadata, which can result in faster responses. Defaults to false and only applies when nft=true.
   * @param quote_currency: optional: the requested fiat currency
   * @param format optional - if "format=csv", return a flat CSV instead of JSON response.
   * @param primer optional - Records enter a multi-stage pipeline that transforms the records into aggregated results. Supports $group and Aggregation operators.
   * @param match optional - Filters the records to pass only the documents that match the specified condition(s).
   * @param group optional - Groups input elements by the specified id expression and for each distinct grouping, outputs an element. Grouping by _date operators is also possible.
   * @param sort optional - Sorts all input records and returns them in ascending or descending sorted order.
   * @param skip optional - Skips over the specified number of records.
   * @param limit optional - Limits the number of records.
   * @returns Observable
   */
  getTokenBalancesForAddress(
    chain_id: String,
    address: String,
    nft?: boolean,
    no_nft_fetch?: boolean,
    quote_currency?: String,
    format?: String,
    primer?: String,
    match?: String,
    group?: String,
    sort?: String,
    skip?: number,
    limit?: number
  ) {
    let nft_param = nft == undefined ? '' : `&nft=${nft}`;
    let no_nft_fetch_param =
      no_nft_fetch == undefined ? '' : `&no_nft_fetch=${no_nft_fetch}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote_currency=${quote_currency}`;
    let format_param = format == undefined ? '' : `&format=${format}`;
    let primer_param = primer == undefined ? '' : `&primer=${primer}`;
    let match_param = match == undefined ? '' : `&match=${match}`;
    let group_param = group == undefined ? '' : `&group=${group}`;
    let sort_param = sort == undefined ? '' : `&sort=${sort}`;
    let skip_param = skip == undefined ? '' : `&skip=${skip}`;
    let limit_param = limit == undefined ? '' : `&limit=${limit}`;
    let params =
      nft_param +
      no_nft_fetch_param +
      quote_currency_param +
      format_param +
      primer_param +
      match_param +
      group_param +
      sort_param +
      skip_param +
      limit_param;
    return this.http.get<CovalentResponse<TokenBalance>>(
      `${this.apiUrl}${chain_id}/address/${address}/balances_v2/?${params}`
    );
  }

  /**
   * Given chain_id and wallet address, return wallet value for the last 30 days at 24 hour timestamps.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address address to be queried
   * @param quote_currency optional: the requested fiat currency
   * @param format optional - if "format=csv", return a flat CSV instead of JSON response.
   * @param primer optional - Records enter a multi-stage pipeline that transforms the records into aggregated results. Supports $group and Aggregation operators.
   * @param match optional - Filters the records to pass only the documents that match the specified condition(s).
   * @param group optional - Groups input elements by the specified id expression and for each distinct grouping, outputs an element. Grouping by _date operators is also possible.
   * @param sort optional - Sorts all input records and returns them in ascending or descending sorted order.
   * @param skip optional - Skips over the specified number of records.
   * @param limit optional - Limits the number of records.
   * @returns Observable
   */
  getHistoricalPortfolioValueOverTime(
    chain_id: String,
    address: String,
    quote_currency?: String,
    format?: String,
    primer?: String,
    match?: String,
    group?: String,
    sort?: String,
    skip?: number,
    limit?: number
  ) {
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote_currency=${quote_currency}`;
    let format_param = format == undefined ? '' : `&format=${format}`;
    let primer_param = primer == undefined ? '' : `&primer=${primer}`;
    let match_param = match == undefined ? '' : `&match=${match}`;
    let group_param = group == undefined ? '' : `&group=${group}`;
    let sort_param = sort == undefined ? '' : `&sort=${sort}`;
    let skip_param = skip == undefined ? '' : `&skip=${skip}`;
    let limit_param = limit == undefined ? '' : `&limit=${limit}`;
    let params =
      quote_currency_param +
      format_param +
      primer_param +
      match_param +
      group_param +
      sort_param +
      skip_param +
      limit_param;
    return this.http.get<CovalentResponse<Portfolio>>(
      `${this.apiUrl}${chain_id}/address/${address}/portfolio_v2/?${params}`
    );
  }

  /**
   * Retrieve all transactions for "address" including their decoded log events. This endpoint does a deep-crawl of the blockchain to retrieve all kinds of transactions that references the "address".
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address address to be queried
   * @param block_signed_at_asc: optional - Sort the transactions in chronological ascending order. By default, it's set to "false" and returns transactions in chronological descending order.
   * @param no_logs optional - Setting this to "true" will omit decoded event logs, resulting in lighter and faster responses. By default it's set to "false".
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @param quote_currency optional: the requested fiat currency
   * @param format optional - if "format=csv", return a flat CSV instead of JSON response.
   * @param primer optional - Records enter a multi-stage pipeline that transforms the records into aggregated results. Supports $group and Aggregation operators.
   * @param match optional - Filters the records to pass only the documents that match the specified condition(s).
   * @param group optional - Groups input elements by the specified id expression and for each distinct grouping, outputs an element. Grouping by _date operators is also possible.
   * @param sort optional - Sorts all input records and returns them in ascending or descending sorted order.
   * @param skip optional - Skips over the specified number of records.
   * @param limit optional - Limits the number of records.
   * @returns Observable
   */
  getTransactions(
    chain_id: String,
    address: String,
    block_signed_at_asc?: boolean,
    no_logs?: boolean,
    page_number?: number,
    page_size?: number,
    quote_currency?: String,
    format?: String,
    primer?: String,
    match?: String,
    group?: String,
    sort?: String,
    skip?: number,
    limit?: number
  ) {
    let block_signed_at_asc_param =
      block_signed_at_asc == undefined
        ? ''
        : `&block_signed_at_asc=${block_signed_at_asc}`;
    let no_logs_param = no_logs == undefined ? '' : `&no_logs=${no_logs}`;
    let page_number_param =
      page_number == undefined ? '' : `&page_number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page_size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote_currency=${quote_currency}`;
    let format_param = format == undefined ? '' : `&format=${format}`;
    let primer_param = primer == undefined ? '' : `&primer=${primer}`;
    let match_param = match == undefined ? '' : `&match=${match}`;
    let group_param = group == undefined ? '' : `&group=${group}`;
    let sort_param = sort == undefined ? '' : `&sort=${sort}`;
    let skip_param = skip == undefined ? '' : `&skip=${skip}`;
    let limit_param = limit == undefined ? '' : `&limit=${limit}`;
    let params =
      block_signed_at_asc_param +
      no_logs_param +
      page_number_param +
      page_size_param +
      quote_currency_param +
      format_param +
      primer_param +
      match_param +
      group_param +
      sort_param +
      skip_param +
      limit_param;
    return this.http.get<CovalentResponse<Transactions>>(
      `${this.apiUrl}${chain_id}/address/${address}/transactions_v2/?${params}`
    );
  }

  /**
   * Get ERC20 token transfers. Passing in an ENS resolves automatically.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address address to be queried
   * @param contract_address address of contract
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @param quote_currency optional: the requested fiat currency
   * @param format optional - if "format=csv", return a flat CSV instead of JSON response.
   * @param primer optional - Records enter a multi-stage pipeline that transforms the records into aggregated results. Supports $group and Aggregation operators.
   * @param match optional - Filters the records to pass only the documents that match the specified condition(s).
   * @param group optional - Groups input elements by the specified id expression and for each distinct grouping, outputs an element. Grouping by _date operators is also possible.
   * @param sort optional - Sorts all input records and returns them in ascending or descending sorted order.
   * @param skip optional - Skips over the specified number of records.
   * @param limit optional - Limits the number of records.
   * @returns Observable
   */
  getERC20TokenTransfers(
    chain_id: String,
    address: String,
    contract_address: String,
    page_number?: number,
    page_size?: number,
    quote_currency?: String,
    format?: String,
    primer?: String,
    match?: String,
    group?: String,
    sort?: String,
    skip?: number,
    limit?: number
  ) {
    let contract_address_param = `&contract_address=${contract_address}`;
    let page_number_param =
      page_number == undefined ? '' : `&page_number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page_size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote_currency=${quote_currency}`;
    let format_param = format == undefined ? '' : `&format=${format}`;
    let primer_param = primer == undefined ? '' : `&primer=${primer}`;
    let match_param = match == undefined ? '' : `&match=${match}`;
    let group_param = group == undefined ? '' : `&group=${group}`;
    let sort_param = sort == undefined ? '' : `&sort=${sort}`;
    let skip_param = skip == undefined ? '' : `&skip=${skip}`;
    let limit_param = limit == undefined ? '' : `&limit=${limit}`;
    let params =
      contract_address_param +
      page_number_param +
      page_size_param +
      quote_currency_param +
      format_param +
      primer_param +
      match_param +
      group_param +
      sort_param +
      skip_param +
      limit_param;

    return this.http.get<CovalentResponse<ERC20Transfers>>(
      `${this.apiUrl}${chain_id}/address/${address}/transfers_v2/?${params}`
    );
  }

  /**
   * Retrieve a single block at block_height. If block_height is set to the value latest, return the latest block available.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param block_height height of block to be queried
   * @param quote_currency optional: the requested fiat currency
   * @param format optional - if "format=csv", return a flat CSV instead of JSON response.
   * @param primer optional - Records enter a multi-stage pipeline that transforms the records into aggregated results. Supports $group and Aggregation operators.
   * @param match optional - Filters the records to pass only the documents that match the specified condition(s).
   * @param group optional - Groups input elements by the specified id expression and for each distinct grouping, outputs an element. Grouping by _date operators is also possible.
   * @param sort optional - Sorts all input records and returns them in ascending or descending sorted order.
   * @param skip optional - Skips over the specified number of records.
   * @param limit optional - Limits the number of records.
   * @returns Observable
   */
  getABlock(
    chain_id: String,
    block_height: String,
    quote_currency?: String,
    format?: String,
    primer?: String,
    match?: String,
    group?: String,
    sort?: String,
    skip?: number,
    limit?: number
  ) {
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote_currency=${quote_currency}`;
    let format_param = format == undefined ? '' : `&format=${format}`;
    let primer_param = primer == undefined ? '' : `&primer=${primer}`;
    let match_param = match == undefined ? '' : `&match=${match}`;
    let group_param = group == undefined ? '' : `&group=${group}`;
    let sort_param = sort == undefined ? '' : `&sort=${sort}`;
    let skip_param = skip == undefined ? '' : `&skip=${skip}`;
    let limit_param = limit == undefined ? '' : `&limit=${limit}`;
    let params =
      quote_currency_param +
      format_param +
      primer_param +
      match_param +
      group_param +
      sort_param +
      skip_param +
      limit_param;
    return this.http.get<CovalentResponse<Block>>(
      `${this.apiUrl}${chain_id}/block_v2/${block_height}/?${params}`
    );
  }

  /**
   * Retrieve all the block height(s) of a particular chain within a date range. If the end_date is set to latest, return every block height from the start_date to now.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param start_date The start datetime of the block height(s). (yyyy-MM-ddTHH:mm:ssZ), eg: 2020-01-01 or 2020-01-01T03:36:50z
   * @param end_date The ending datetime of the block height(s). (yyyy-MM-ddTHH:mm:ssZ), eg: 2020-01-02 or 2020-01-02T03:36:50z
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @param quote_currency optional: the requested fiat currency
   * @param format optional - if "format=csv", return a flat CSV instead of JSON response.
   * @param primer optional - Records enter a multi-stage pipeline that transforms the records into aggregated results. Supports $group and Aggregation operators.
   * @param match optional - Filters the records to pass only the documents that match the specified condition(s).
   * @param group optional - Groups input elements by the specified id expression and for each distinct grouping, outputs an element. Grouping by _date operators is also possible.
   * @param sort optional - Sorts all input records and returns them in ascending or descending sorted order.
   * @param skip optional - Skips over the specified number of records.
   * @param limit optional - Limits the number of records.
   * @returns Observable
   */
  getBlockHeights(
    chain_id: String,
    start_date: String,
    end_date: String,
    page_number?: number,
    page_size?: number,
    quote_currency?: String,
    format?: String,
    primer?: String,
    match?: String,
    group?: String,
    sort?: String,
    skip?: number,
    limit?: number
  ) {
    let page_number_param =
      page_number == undefined ? '' : `&page_number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page_size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote_currency=${quote_currency}`;
    let format_param = format == undefined ? '' : `&format=${format}`;
    let primer_param = primer == undefined ? '' : `&primer=${primer}`;
    let match_param = match == undefined ? '' : `&match=${match}`;
    let group_param = group == undefined ? '' : `&group=${group}`;
    let sort_param = sort == undefined ? '' : `&sort=${sort}`;
    let skip_param = skip == undefined ? '' : `&skip=${skip}`;
    let limit_param = limit == undefined ? '' : `&limit=${limit}`;
    let params =
      page_number_param +
      page_size_param +
      quote_currency_param +
      format_param +
      primer_param +
      match_param +
      group_param +
      sort_param +
      skip_param +
      limit_param;
    return this.http.get<CovalentResponse<Block>>(
      `${this.apiUrl}${chain_id}/block_v2/${start_date}/${end_date}/?${params}`
    );
  }

  /**
   * Return a paginated list of decoded log events emiited by a particular smart contract.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address address to be queried
   * @param starting_block starting block to define a block range
   * @param ending_block ending block to define a block range. Passing in 'latest' uses the lastest block height
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @param quote_currency optional: the requested fiat currency
   * @param format optional - if "format=csv", return a flat CSV instead of JSON response.
   * @param primer optional - Records enter a multi-stage pipeline that transforms the records into aggregated results. Supports $group and Aggregation operators.
   * @param match optional - Filters the records to pass only the documents that match the specified condition(s).
   * @param group optional - Groups input elements by the specified id expression and for each distinct grouping, outputs an element. Grouping by _date operators is also possible.
   * @param sort optional - Sorts all input records and returns them in ascending or descending sorted order.
   * @param skip optional - Skips over the specified number of records.
   * @param limit optional - Limits the number of records.
   * @returns Observable
   */
  getLogEventsByContractAddress(
    chain_id: String,
    address: String,
    starting_block: String,
    ending_block: String,
    page_number?: number,
    page_size?: number,
    quote_currency?: String,
    format?: String,
    primer?: String,
    match?: String,
    group?: String,
    sort?: String,
    skip?: number,
    limit?: number
  ) {
    let starting_block_param = `&starting-block=${starting_block}`;
    let ending_block_param = `&ending-block=${ending_block}`;
    let page_number_param =
      page_number == undefined ? '' : `&page_number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page_size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote_currency=${quote_currency}`;
    let format_param = format == undefined ? '' : `&format=${format}`;
    let primer_param = primer == undefined ? '' : `&primer=${primer}`;
    let match_param = match == undefined ? '' : `&match=${match}`;
    let group_param = group == undefined ? '' : `&group=${group}`;
    let sort_param = sort == undefined ? '' : `&sort=${sort}`;
    let skip_param = skip == undefined ? '' : `&skip=${skip}`;
    let limit_param = limit == undefined ? '' : `&limit=${limit}`;
    let params =
      starting_block_param +
      ending_block_param +
      page_number_param +
      page_size_param +
      quote_currency_param +
      format_param +
      primer_param +
      match_param +
      group_param +
      sort_param +
      skip_param +
      limit_param;
    return this.http.get<CovalentResponse<LogEvents>>(
      `${this.apiUrl}${chain_id}/events/address/${address}/?${params}/`
    );
  }

  getLogEventsByTopicHashes() {}

  getExternalNftMetadata() {}

  getNftTokenIds() {}

  getNftTransactions() {}

  getChangesInTokenHoldersBetweenTwoBlockHeights() {}

  getTokenHoldersAsOfABlockHeight() {}

  getAllContractMetadata() {}

  /**
   * Retrieve a single transaction for tx_hash including their decoded log events.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param tx_hash hash of transaction
   * @param no_logs optional - Setting this to "true" will omit decoded event logs, resulting in lighter and faster responses. By default it's set to "false".
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @param quote_currency optional: the requested fiat currency
   * @param format optional - if "format=csv", return a flat CSV instead of JSON response.
   * @param primer optional - Records enter a multi-stage pipeline that transforms the records into aggregated results. Supports $group and Aggregation operators.
   * @param match optional - Filters the records to pass only the documents that match the specified condition(s).
   * @param group optional - Groups input elements by the specified id expression and for each distinct grouping, outputs an element. Grouping by _date operators is also possible.
   * @param sort optional - Sorts all input records and returns them in ascending or descending sorted order.
   * @param skip optional - Skips over the specified number of records.
   * @param limit optional - Limits the number of records.
   * @returns Observable
   */
  getATransaction(
    chain_id: String,
    tx_hash: String,
    no_logs?: boolean,
    page_number?: number,
    page_size?: number,
    quote_currency?: String,
    format?: String,
    primer?: String,
    match?: String,
    group?: String,
    sort?: String,
    skip?: number,
    limit?: number
  ) {
    let no_logs_param = no_logs == undefined ? '' : `&no_logs=${no_logs}`;

    let page_number_param =
      page_number == undefined ? '' : `&page_number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page_size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote_currency=${quote_currency}`;
    let format_param = format == undefined ? '' : `&format=${format}`;
    let primer_param = primer == undefined ? '' : `&primer=${primer}`;
    let match_param = match == undefined ? '' : `&match=${match}`;
    let group_param = group == undefined ? '' : `&group=${group}`;
    let sort_param = sort == undefined ? '' : `&sort=${sort}`;
    let skip_param = skip == undefined ? '' : `&skip=${skip}`;
    let limit_param = limit == undefined ? '' : `&limit=${limit}`;
    let params =
      no_logs_param +
      page_number_param +
      page_size_param +
      quote_currency_param +
      format_param +
      primer_param +
      match_param +
      group_param +
      sort_param +
      skip_param +
      limit_param;
    return this.http.get<CovalentResponse<TransactionItem>>(
      `${this.apiUrl}${chain_id}/transaction_v2/${tx_hash}/?${params}`
    );
  }
  // -----------------------------
  // -----------------------------
  // -----------------------------
  // ---------- CLASS B ----------
  // -----------------------------
  // -----------------------------
  // -----------------------------

  getSushiswapAddressExchangeLiquidityTransactions() {}

  getSushiswapAddressExchangeBalances() {}

  getSushiswapNetworkAssets() {}

  getCompoundAddressActivity() {}

  getCompoundAddressBalances() {}

  getCompoundNetworkAssets() {}

  getFarmingStats() {}

  getAaveV2NetworkAssets() {}

  getAaveNetworkAssets() {}

  getAaveV2AddressBalances() {}

  getAaveAddressBalances() {}

  getAugurMarketAffiliateFeeDivisors() {}

  getPancakeswapV2AddressExchangeBalances() {}

  getPancakeswapAddressExchangeBalances() {}

  getPancakeswapAddressExchangeLiquidityBalances() {}

  getPancakeswapV2NetworkAssets() {}

  getPancakeSwapNetworkAssets() {}

  getBalancerExchangeAddressBalances() {}

  getCurveAddressBalances() {}

  getUniswapV2NetworkAssets() {}

  getUniswapV1AddressExchangeBalances() {}

  getUniswapV2AddressExchangeLiquidityTransactions() {}

  getUniswapV2AddressExchangeBalances() {}

  // -----------------------------
  // -----------------------------
  // -----------------------------
  // ----- PRICING ENDPOINTS -----
  // -----------------------------
  // -----------------------------
  // -----------------------------

  /**
   *
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param quote_currency the requested fiat currency
   * @param contract_address smart contract address to be queried
   */
  getHistoricalPricesByAddress(
    chain_id: String,
    quote_currency: String = 'USD',
    contract_address: String
  ) {}

  /**
   *
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param quote_currency the requested fiat currency
   * @param contract_addresses smart contract address(es)
   */
  getHistoricalPricesByAddressesV2(
    chain_id: String,
    quote_currency: String = 'USD',
    contract_addresses: String
  ) {}

  /**
   *
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param quote_currency the requested fiat currency
   * @param contract_addresses smart contract address(es)
   */
  getHistoricalPricesByAddresses(
    chain_id: String,
    quote_currency: String = 'USD',
    contract_addresses: String
  ) {}

  /**
   * Get spot prices and metadata for all tickers or a select group of tickers. Without tickers query param, it returns a paginated list of all tickers sorted by market cap.
   * @param tickers
   * @param page_number
   * @param page_size
   * @returns
   */
  getSpotPrices(tickers: String, page_number?: number, page_size?: number) {
    page_size = page_size == undefined ? page_size : tickers.split(',').length;
    tickers = tickers !== undefined ? '?tickers=' + tickers : '';
    return this.http.get<CovalentResponse<Pricing>>(
      this.apiUrl + 'pricing/tickers/' + tickers + '&page-size=' + page_size
    );
  }

  /**
   * Get price volatility and metadata for a select group of tickers.
   * @param tickers if comma-separated list of tickers is provided, only the spot prices for these tokens will be returned
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @returns
   */
  getPriceVolatility(
    tickers: String,
    page_number?: number,
    page_size?: number
  ) {
    page_size = page_size == undefined ? page_size : tickers.split(',').length;
    return this.http.get<CovalentResponse<Volatility>>(
      this.apiUrl +
        'pricing/volatility/?tickers=' +
        tickers +
        '&page-size=' +
        page_size
    );
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Block } from './models/ClassA/Block';
import { CovalentResponse } from './models/CovalentResponse';
import { Portfolio } from './models/ClassA/Portfolio';
import { TokenBalance } from './models/ClassA/TokenBalance';
import { Transactions } from './models/ClassA/Transactions';
import { Volatility } from './models/Pricing Endpoints/Volatility';
import { ERC20Transfers } from './models/ClassA/ERC20Transfers';
import { LogEvents } from './models/ClassA/LogEvents';
import { TransactionItem } from './models/ClassA/TransactionItem';
import { ContractMetadata } from './models/ClassA/ContractMetadata';
import { TokenHolders } from './models/ClassA/TokenHolders';
import { TokenHolderChanges } from './models/ClassA/TokenHolderChanges';
import { NftDataResponse } from './models/ClassA/NFTDataResponse';
import { NftTransactionsResponse } from './models/ClassA/NftTransactionsResponse';
import { NftTokenIdsResponse } from './models/ClassA/NftTokenIdsResponse';
import { SpotPrices } from './models/Pricing Endpoints/SpotPrices';
import { HistoricalPrices } from './models/Pricing Endpoints/HistoricalPrices';
import { PancakeExchangeBalanceResponse } from './models/ClassB/PancakeExchangeBalanceResponse';
import { SushiswapExchangeBalanceResponse } from './models/ClassB/SushiswapExchangeBalanceResponse';
import { UniswapV2ExchangeBalanceResponse } from './models/ClassB/UniswapV2ExchangeBalanceResponse';
import { UniswapV1ExchangeBalanceResponse } from './models/ClassB/UniswapV1ExchangeBalanceResponse';
import { AaveAddressBalanceResponse } from './models/ClassB/AaveAddressBalanceResponse';
import { AaveAddressBalanceV2Response } from './models/ClassB/AaveAddressBalanceV2Response';
import { PancakeswapNetworkAssetResponse } from './models/ClassB/PancakeswapNetworkAssetResponse';
import { AugurAffiliateResponse } from './models/ClassB/AugurAffiliateResponse';
import { AaveNetworkAssetResponse } from './models/ClassB/AaveNetworkAssetResponse';
import { AaveNetworkAssetV2Response } from './models/ClassB/AaveNetworkAssetV2Response';
import { BalancerExchangeAddressBalanceResponse } from './models/ClassB/BalancerExchangeAddressBalanceResponse';
import { CompoundAddressBalanceResponse } from './models/ClassB/CompoundAddressBalanceResponse';
import { CompoundAddressActivityResponse } from './models/ClassB/CompoundAddressActivityResponse';
import { CompoundNetworkAssetResponse } from './models/ClassB/CompoundNetworkAssetResponse';
import { CurveAddressBalanceResponse } from './models/ClassB/CurveAddressBalanceResponse';
import { ExchangeLiquidityResponse } from './models/ClassB/ExchangeLiquidityResponse';
import { UniswapV2NetworkAssetResponse } from './models/ClassB/UniswapV2NetworkAssetResponse';
import { PancakeswapV2NetworkAssetResponse } from './models/ClassB/PancakeswapV2NetworkAssetResponse';

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
      no_nft_fetch == undefined ? '' : `&no-nft-fetch=${no_nft_fetch}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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
    let no_logs_param = no_logs == undefined ? '' : `&no-logs=${no_logs}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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
    let contract_address_param = `&contract-address=${contract_address}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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

  /**
   * Return a paginated list of decoded log events with one or more topic hashes separated by a comma.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address address to be queried
   * @param starting_block starting block to define a block range
   * @param ending_block ending block to define a block range. Passing in 'latest' uses the lastest block height
   * @param sender_address optional - address of the sender
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
  getLogEventsByTopicHashes(
    chain_id: String,
    topic: String,
    starting_block: String,
    ending_block: String,
    sender_address: String,
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
    let sender_address_param = `&sender-address=${sender_address}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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
      sender_address_param +
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
      `${this.apiUrl}${chain_id}/events/topics/${topic}/?${params}/`
    );
  }

  /**
   * Return a paginated list of decoded log events with one or more topic hashes separated by a comma.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address NFT contract address to be queried
   * @param token_id - ID of the token
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
  getExternalNftMetadata(
    chain_id: String,
    address: String,
    token_id: String,
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
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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
    return this.http.get<CovalentResponse<NftDataResponse>>(
      `${this.apiUrl}${chain_id}/tokens/${address}/nft_metadata/${token_id}/?${params}/`
    );
  }

  /**
   * Returns a list of all token IDs for a NFT contract on a blockchain network.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address NFT contract address to be queried
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
  getNftTokenIds(
    chain_id: String,
    address: String,
    page_number: number,
    page_size: number,
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
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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
    return this.http.get<CovalentResponse<NftTokenIdsResponse>>(
      `${this.apiUrl}${chain_id}/tokens/${address}/nft_token_ids/?${params}/`
    );
  }

  /**
   * Returns a list of transactions given a NFT contract and a token ID on a blockchain network.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address NFT contract address to be queried
   * @param token_id - ID of the token
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
  getNftTransactions(
    chain_id: String,
    address: String,
    token_id: String,
    page_number: number,
    page_size: number,
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
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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
    return this.http.get<CovalentResponse<NftTransactionsResponse>>(
      `${this.apiUrl}${chain_id}/tokens/${address}/nft_transactions/${token_id}/?${params}/`
    );
  }

  /**
   * Get token balance changes for token holders between "starting-block" and "ending-block". Return a paginated list of token holders and their current/historical balances. If "ending-block" is omitted, the latest block is used. Note: Token holder balances exclude passive rewards through static reflection.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address address to be queried
   * @param starting_block starting block to define a block range
   * @param ending_block optional - ending block to define a block range
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
  getChangesInTokenHoldersBetweenTwoBlockHeights(
    chain_id: String,
    address: String,
    starting_block: number,
    ending_block?: number,
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
    let ending_block_param =
      ending_block == undefined ? '' : `&ending-block=${ending_block}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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
    return this.http.get<CovalentResponse<TokenHolderChanges>>(
      `${this.apiUrl}${chain_id}/tokens/${address}/token_holders_changes/?${params}`
    );
  }

  /**
   * Return a paginated list of token holders. If block-height is omitted, the latest block is used. Note: Token holder balances exclude passive rewards through static reflection.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address address to be queried
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
  getTokenHoldersAsOfABlockHeight(
    chain_id: String,
    address: String,
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
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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
    return this.http.get<CovalentResponse<TokenHolders>>(
      `${this.apiUrl}${chain_id}/tokens/${address}/token_holders/?${params}`
    );
  }

  /**
   * Returns a list of all contracts on a blockchain along with their metadata.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param id only "all" supported right now
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
  getAllContractMetadata(
    chain_id: String,
    id: String,
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
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote_-currency=${quote_currency}`;
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
    return this.http.get<CovalentResponse<ContractMetadata>>(
      `${this.apiUrl}${chain_id}/tokens/tokenlists/${id}/?${params}`
    );
  }

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
    let no_logs_param = no_logs == undefined ? '' : `&no-logs=${no_logs}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
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

  /**
   * Get farming positions on Uniswap, Sushiswap, and Harvest.
   * @param address passing in an "ENS" resolves automatically.
   * @returns Observable
   */
  getFarmingStats(address: String) {
    return this.http.get<CovalentResponse<any>>(
      `${this.apiUrl}1/address/${address}/stacks/farming/positions/`
    );
  }

  // -----------------------------
  // ---------- AAVE -------------
  // -----------------------------

  /**
   * Get Aave v2 address balances, supply and borrow positions.
   * @param address Aave address
   * @returns Observable
   */
  getAaveV2AddressBalances(address: String) {
    return this.http.get<CovalentResponse<AaveAddressBalanceV2Response>>(
      `${this.apiUrl}1/address/${address}/stacks/aave_v2/balances/`
    );
  }

  /**
   * Get Aave address balances.
   * @param address Aave address
   * @returns Observable
   */
  getAaveAddressBalances(address: String) {
    return this.http.get<CovalentResponse<AaveAddressBalanceResponse>>(
      `${this.apiUrl}1/address/${address}/stacks/aave/balances/`
    );
  }

  /**
   * Get Aave network assets
   * @returns Observable
   */
  getAaveV2NetworkAssets() {
    return this.http.get<CovalentResponse<AaveNetworkAssetV2Response>>(
      `${this.apiUrl}1/networks/aave_v2/assets/`
    );
  }

  /**
   * Get Aave network assets
   * @returns Observable
   */
  getAaveNetworkAssets() {
    return this.http.get<CovalentResponse<AaveNetworkAssetResponse>>(
      `${this.apiUrl}1/networks/aave/assets/`
    );
  }

  // -----------------------------
  // ---------- AUGUR ------------
  // -----------------------------

  /**
   * Get Augur market affiliate fee divisors
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @returns
   */
  getAugurMarketAffiliateFeeDivisors(page_number?: String, page_size?: String) {
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let params = page_number_param + page_size_param;
    return this.http.get<CovalentResponse<AugurAffiliateResponse>>(
      `${this.apiUrl}1/networks/augur/affiliate_fee/?${params}`
    );
  }
  // -----------------------------
  // -------- BALANCER -----------
  // -----------------------------

  /**
   * Get Balancer exchange address balances.
   * @param address balancer address. Passing in an "ENS" resolves automatically.
   * @returns
   */
  getBalancerExchangeAddressBalances(address: String) {
    return this.http.get<
      CovalentResponse<BalancerExchangeAddressBalanceResponse>
    >(`${this.apiUrl}1/address/${address}/stacks/balancer/balances/`);
  }
  // -----------------------------
  // -------- COMPOUND -----------
  // -----------------------------

  /**
   * Get Compound address balances.
   * @param address compound address. Passing in an "ENS" resolves automatically.
   */
  getCompoundAddressBalances(address: String) {
    return this.http.get<CovalentResponse<CompoundAddressBalanceResponse>>(
      `${this.apiUrl}1/address/${address}/stacks/compound/balances/`
    );
  }
  /**
   * Get Compound address activity.
   * @param address compound address. Passing in an "ENS" resolves automatically.
   */
  getCompoundAddressActivity(address: String) {
    return this.http.get<CovalentResponse<CompoundAddressActivityResponse>>(
      `${this.apiUrl}1/address/${address}/stacks/compound/acts/`
    );
  }

  /**
   * Get Compound network assets.
   * @returns Observable
   */
  getCompoundNetworkAssets() {
    return this.http.get<CovalentResponse<CompoundNetworkAssetResponse>>(
      `${this.apiUrl}1/networks/compound/assets/`
    );
  }

  // -----------------------------
  // ---------- CURVE ------------
  // -----------------------------

  /**
   * Get Curve address balances.
   * @param address compound address. Passing in an "ENS" resolves automatically.
   */
  getCurveAddressBalances(address: String) {
    return this.http.get<CovalentResponse<CurveAddressBalanceResponse>>(
      `${this.apiUrl}1/address/${address}/stacks/curve/balances/`
    );
  }

  // -----------------------------
  // --------- PANCAKE -----------
  // -----------------------------

  /**
   * Get Pancakeswap V2 address exchange balances.
   * @param address requested wallet address
   * @param quote_currency optional - requested fiat currency
   * @returns
   */
  getPancakeswapV2AddressExchangeBalances(
    address: String,
    quote_currency?: String
  ) {
    let quote_currency_param =
      quote_currency == undefined ? '' : `quote-currency=${quote_currency}`;
    return this.http.get<CovalentResponse<PancakeExchangeBalanceResponse>>(
      `${this.apiUrl}56/address/${address}/stacks/pancakeswap_v2/balances/?${quote_currency_param}`
    );
  }

  /**
   * Get Pancakeswap address exchange balances.
   * @param address requested wallet address
   * @param quote_currency optional - requested fiat currency
   * @returns Observable
   */
  getPancakeswapAddressExchangeBalances(
    address: String,
    quote_currency?: String
  ) {
    let quote_currency_param =
      quote_currency == undefined ? '' : `quote-currency=${quote_currency}`;
    return this.http.get<CovalentResponse<PancakeExchangeBalanceResponse>>(
      `${this.apiUrl}56/address/${address}/stacks/pancakeswap/balances/?${quote_currency_param}`
    );
  }

  /**
   * Get Pancakeswap address exchange liquidity transactions.
   * @param address requested wallet address
   * @param swaps optional - Get additional insight on swap event data related to this address, default: "false"
   * @param quote_currency optional - requested fiat currency
   * @returns Observable
   */
  getPancakeswapAddressExchangeLiquidityBalances(
    address: String,
    swaps?: String,
    quote_currency?: String
  ) {
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
    let swap_param = swaps == undefined ? '' : `&swaps=${swaps}`;
    let params = quote_currency_param + swap_param;

    return this.http.get<CovalentResponse<ExchangeLiquidityResponse>>(
      `${this.apiUrl}56/address/${address}/stacks/pancakeswap/acts/?${params}`
    );
  }

  /**
   * Return a paginated list of Pancake V2 pools sorted by exchange volume. Only pools with swaps in the last 24 hours are included.
   * @param tickers optional - If "tickers" (a comma separated list) is present, only return the pools that contain these tickers.
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @returns Observable
   */
  getPancakeswapV2NetworkAssets(
    tickers?: String,
    page_number?: String,
    page_size?: String
  ) {
    let tickers_param = tickers == undefined ? '' : `&tickers=${tickers}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;

    let params = tickers + page_number_param + page_size_param;
    return this.http.get<CovalentResponse<PancakeswapNetworkAssetResponse>>(
      `${this.apiUrl}56/networks/pancakeswap_v2/assets/?${params}`
    );
  }

  /**
   * Return a paginated list of Pancake pools sorted by exchange volume. Only pools with swaps in the last 24 hours are included.
   * @param tickers optional - If "tickers" (a comma separated list) is present, only return the pools that contain these tickers.
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @returns Observable
   */
  getPancakeswapNetworkAssets(
    tickers?: String,
    page_number?: String,
    page_size?: String
  ) {
    let tickers_param = tickers == undefined ? '' : `&tickers=${tickers}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;

    let params = tickers_param + page_number_param + page_size_param;
    return this.http.get<CovalentResponse<PancakeswapNetworkAssetResponse>>(
      `${this.apiUrl}56/networks/pancakeswap/assets/?${params}`
    );
  }

  /**
   * Get Pancakeswap V2 network asset by address batch
   * @param address address
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @returns Observable
   */
  getPancakeswapV2NetworkAssetsByAddress(
    address: String,
    page_number?: String,
    page_size?: String
  ) {
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;

    let params = page_number_param + page_size_param;
    return this.http.get<CovalentResponse<PancakeswapV2NetworkAssetResponse>>(
      `${this.apiUrl}56/networks/pancakeswap/assets/${address}/?${params}`
    );
  }

  // -----------------------------
  // -------- SUSHISWAP ----------
  // -----------------------------

  /**
   * Get Sushiswap address exchange liquidity transactions.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address requested wallet address. Passing in "ENS" resolves automatically.
   * @param swaps optional - Get additional insight on swap event data related to this address, default: "false"
   * @param quote_currency optional - requested fiat currency
   * @returns Observable
   */
  getSushiswapAddressExchangeLiquidityTransactions(
    chain_id: String,
    address: String,
    swaps?: String,
    quote_currency?: String
  ) {
    let quote_currency_param =
      quote_currency == undefined ? '' : `&quote-currency=${quote_currency}`;
    let swap_param = swaps == undefined ? '' : `&swaps=${swaps}`;
    let params = quote_currency_param + swap_param;

    return this.http.get<CovalentResponse<ExchangeLiquidityResponse>>(
      `${this.apiUrl}${chain_id}/address/${address}/stacks/sushiswap/acts/?${params}`
    );
  }

  /**
   * Get Sushiswap address exchange balances. Passing in an ENS resolves automatically.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param address requested wallet address
   * @param quote_currency optional - requested fiat currency
   * @returns Observable
   */
  getSushiswapAddressExchangeBalances(
    chain_id: String,
    address: String,
    quote_currency?: String
  ) {
    let quote_currency_param =
      quote_currency == undefined ? '' : `quote-currency=${quote_currency}`;
    return this.http.get<CovalentResponse<SushiswapExchangeBalanceResponse>>(
      `${this.apiUrl}${chain_id}/address/${address}/stacks/sushiswap/balances/?${quote_currency_param}`
    );
  }

  /**
   * Return a paginated list of Sushiswap pools sorted by exchange volume.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param tickers optional - If "tickers" (a comma separated list) is present, only return the pools that contain these tickers.
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @returns Observable
   */
  getSushiswapNetworkAssets(
    chain_id: String,
    tickers?: String,
    page_number?: String,
    page_size?: String
  ) {
    let tickers_param = tickers == undefined ? '' : `&tickers=${tickers}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;

    let params = tickers_param + page_number_param + page_size_param;
    return this.http.get<CovalentResponse<SushiswapExchangeBalanceResponse>>(
      `${this.apiUrl}${chain_id}/networks/sushiswap/assets/?${params}`
    );
  }

  // -----------------------------
  // --------- UNISWAP -----------
  // -----------------------------

  /**
   * Get Uniswap v2 address exchange balances.
   * @param address - Passing in an "ENS" resolves automatically.
   * @returns Observable
   */
  getUniswapV2AddressExchangeBalances(address: String) {
    return this.http.get<CovalentResponse<UniswapV2ExchangeBalanceResponse>>(
      `${this.apiUrl}1/address/${address}/stacks/uniswap_v2/balances/`
    );
  }

  /**
   * Get Uniswap v1 address exchange balances.
   * @param address - Passing in an "ENS" resolves automatically.
   * @returns Observable
   */
  getUniswapV1AddressExchangeBalances(address: String) {
    return this.http.get<CovalentResponse<UniswapV1ExchangeBalanceResponse>>(
      `${this.apiUrl}1/address/${address}/stacks/uniswap_v1/balances/`
    );
  }

  /**
   * Get Uniswap v2 address exchange liquidity transactions.
   * @param address requested wallet address. Passing in "ENS" resolves automatically.
   * @param swaps optional - Get additional insight on swap event data related to this address, default: "false"
   * @returns Observable
   */
  getUniswapV2AddressExchangeLiquidityTransactions(
    address: String,
    swaps?: String
  ) {
    let swaps_param = swaps == undefined ? '' : `swaps=${swaps}`;
    return this.http.get<CovalentResponse<ExchangeLiquidityResponse>>(
      `${this.apiUrl}1/address/${address}/stacks/uniswap_v2/acts/?${swaps_param}`
    );
  }

  /**
   * Return a paginated list of Uniswap pools sorted by exchange volume.
   * @param tickers optional - If "tickers" (a comma separated list) is present, only return the pools that contain these tickers.
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @returns Observable
   */
  getUniswapV2NetworkAssets(
    tickers?: String,
    page_number?: String,
    page_size?: String
  ) {
    let tickers_param = tickers == undefined ? '' : `&tickers=${tickers}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;

    let params = tickers_param + page_number_param + page_size_param;
    return this.http.get<CovalentResponse<UniswapV2NetworkAssetResponse>>(
      `${this.apiUrl}1/networks/uniswap_v2/assets/?${params}`
    );
  }

  // -----------------------------
  // -----------------------------
  // -----------------------------
  // ----- PRICING ENDPOINTS -----
  // -----------------------------
  // -----------------------------
  // -----------------------------

  /**
   * Get historical prices for a "contract_address" in a particular "chain_id" and "quote_currency". Can pass to and from to define a range, by default if they are omitted, it returns today's price.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param quote_currency the requested fiat currency
   * @param contract_address smart contract address to be queried
   * @param from optional - start day of historical price range (YYYY-MM-DD)
   * @param to optional - end day of historical price range (YYYY-MM-DD)
   * @param prices_at_asc optional - Sort the prices in chronological ascending order. By default, it's set to "false" and returns prices in chronological descending order.
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @param format optional - if "format=csv", return a flat CSV instead of JSON response.
   * @returns Observable
   */
  getHistoricalPricesByAddress(
    chain_id: String,
    quote_currency: String,
    contract_address: String,
    from?: String,
    end?: String,
    prices_at_asc?: String,
    page_number?: number,
    page_size?: number,
    format?: String
  ) {
    let from_param = from == undefined ? '' : `&from=${from}`;
    let end_param = end == undefined ? '' : `&page-end=${end}`;
    let prices_at_asc_param =
      prices_at_asc == undefined ? '' : `&prices-at-asc=${prices_at_asc}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let format_param = format == undefined ? '' : `&format=${format}`;

    let params =
      from_param +
      end_param +
      prices_at_asc_param +
      page_number_param +
      page_size_param +
      format_param;

    return this.http.get<CovalentResponse<HistoricalPrices>>(
      `${this.apiUrl}/pricing/historical_by_address/${chain_id}/${quote_currency}/${contract_address}/?${params}`
    );
  }

  /**
   * Get historical prices for a "contract_address", or a comma-separated group of "contract_addresses" in a particular "chain_id" and "quote_currency". Can pass to and from to define a range, by default if they are omitted, it returns today's price.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param quote_currency the requested fiat currency
   * @param contract_addresses smart contract address(es) to be queried
   * @param from optional - start day of historical price range (YYYY-MM-DD)
   * @param to optional - end day of historical price range (YYYY-MM-DD)
   * @param prices_at_asc optional - Sort the prices in chronological ascending order. By default, it's set to "false" and returns prices in chronological descending order.
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @param format optional - if "format=csv", return a flat CSV instead of JSON response.
   * @returns Observable
   */
  getHistoricalPricesByAddressesV2(
    chain_id: String,
    quote_currency: String,
    contract_addresses: String,
    from?: String,
    end?: String,
    prices_at_asc?: String,
    page_number?: number,
    page_size?: number,
    format?: String
  ) {
    let from_param = from == undefined ? '' : `&from=${from}`;
    let end_param = end == undefined ? '' : `&page-end=${end}`;
    let prices_at_asc_param =
      prices_at_asc == undefined ? '' : `&prices-at-asc=${prices_at_asc}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let format_param = format == undefined ? '' : `&format=${format}`;

    let params =
      from_param +
      end_param +
      prices_at_asc_param +
      page_number_param +
      page_size_param +
      format_param;

    return this.http.get<CovalentResponse<HistoricalPrices>>(
      `${this.apiUrl}/pricing/historical_by_addresses_v2/${chain_id}/${quote_currency}/${contract_addresses}/?${params}`
    );
  }

  /**
   * Get historical prices for a "contract_address", or a comma-separated group of "contract_addresses" in a particular "chain_id" and "quote_currency". Can pass to and from to define a range, by default if they are omitted, it returns today's price.
   * @param chain_id Chain ID of the Blockchain being queried. 1 for Ethereum Mainnet, 137 for Polygon/Matic Mainnet, 80001 for Polygon/Matic Mumbai Testnet, 56 for Binance Smart Chain, 43114 for Avalanche C-Chain Mainnet, 43113 for Fuji C-Chain Testnet, and 250 for Fantom Opera Mainnet.
   * @param quote_currency the requested fiat currency
   * @param contract_addresses smart contract address(es) to be queried
   * @param from optional - start day of historical price range (YYYY-MM-DD)
   * @param to optional - end day of historical price range (YYYY-MM-DD)
   * @param prices_at_asc optional - Sort the prices in chronological ascending order. By default, it's set to "false" and returns prices in chronological descending order.
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @param format optional - if "format=csv", return a flat CSV instead of JSON response.
   * @returns Observable
   */
  getHistoricalPricesByAddresses(
    chain_id: String,
    quote_currency: String,
    contract_addresses: String,
    from?: String,
    end?: String,
    prices_at_asc?: String,
    page_number?: number,
    page_size?: number,
    format?: String
  ) {
    let from_param = from == undefined ? '' : `&from=${from}`;
    let end_param = end == undefined ? '' : `&page-end=${end}`;
    let prices_at_asc_param =
      prices_at_asc == undefined ? '' : `&prices-at-asc=${prices_at_asc}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let format_param = format == undefined ? '' : `&format=${format}`;

    let params =
      from_param +
      end_param +
      prices_at_asc_param +
      page_number_param +
      page_size_param +
      format_param;

    return this.http.get<CovalentResponse<HistoricalPrices>>(
      `${this.apiUrl}/pricing/historical_by_addresses/${chain_id}/${quote_currency}/${contract_addresses}/?${params}`
    );
  }

  /**
   * Get spot prices and metadata for all tickers or a select group of tickers. Without "tickers" query param, it returns a paginated list of all tickers sorted by market cap.
   * @param tickers optional - if comma-separated list of tickers is provided, only the spot prices for these tokens will be returned
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @param format optional - if "format = csv", return a flat CSV instead of JSON
   * @returns Observable
   */
  getSpotPrices(
    tickers?: String,
    page_number?: number,
    page_size?: number,
    format?: String
  ) {
    let tickers_param = tickers == undefined ? '' : `&tickers=${tickers}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let format_param = format == undefined ? '' : `&format=${format}`;
    let params =
      tickers_param + page_number_param + page_size_param + format_param;

    return this.http.get<CovalentResponse<SpotPrices>>(
      `${this.apiUrl}/pricing/tickers/?${params}`
    );
  }

  /**
   * Get price volatility and metadata for a select group of tickers. Without the "tickers" query, it defaults to "ETH" volatility
   * @param tickers optional - if comma-separated list of tickers is provided, only the spot prices for these tokens will be returned
   * @param page_number optional - specific page to be returned
   * @param page_size optional - number of results per page
   * @param format optional - if "format = csv", return a flat CSV instead of JSON
   * @returns Observable
   */
  getPriceVolatility(
    tickers?: String,
    page_number?: number,
    page_size?: number,
    format?: String
  ) {
    let tickers_param = tickers == undefined ? '' : `&tickers=${tickers}`;
    let page_number_param =
      page_number == undefined ? '' : `&page-number=${page_number}`;
    let page_size_param =
      page_size == undefined ? '' : `&page-size=${page_size}`;
    let format_param = format == undefined ? '' : `&format=${format}`;
    let params =
      tickers_param + page_number_param + page_size_param + format_param;

    return this.http.get<CovalentResponse<Volatility>>(
      `${this.apiUrl}/pricing/volatility/?${params}`
    );
  }
}

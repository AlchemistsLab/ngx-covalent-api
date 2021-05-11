export interface Transaction {
    block_signed_at: String;
    tx_hash: String;
    tx_offset: number;
    successful: boolean;
    from_address: String;
    from_address_label: String;
    to_address: String;
    to_address_label: String;
    value: String;
    value_quote: String;
    gas_offered: number;
    gas_spent: number;
    gas_price: number;
    gas_quote: String;
    gas_quote_rate: String;
}
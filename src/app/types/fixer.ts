export interface Query {
    from?: string;
    to?: string;
    amount?: number;
}

export interface ConvertResponse {
    success?: boolean;
    query?: {
        from?: string;
        to?: string;
        amount?: number;
    };
    result?: number;
}

export interface SymbolResponse {
    success?: boolean;
    symbols?: {
        [key: string]: string;
    };
}

export interface Query {
    from?: string;
    to?: string;
    amount?: number;
    symbols?: string;
    base?: string;
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

export interface LatestResponse {
    success?: boolean;
    rates?: {
        [key: string]: number;
    };
}

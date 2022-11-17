export interface ConvertQuery {
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

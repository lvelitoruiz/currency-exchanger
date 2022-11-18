import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Query, ConvertResponse, SymbolResponse, LatestResponse } from "../types/fixer";

@Injectable({
    providedIn: 'root',
})
export class FixerService {

    private path = 'https://api.apilayer.com/fixer';

    constructor(private http: HttpClient) { }

    public convert(query: Query): Observable<ConvertResponse> {
        const url = this.path + `/convert${this.createQueryParams(query)}`; 
        return this.http.get<ConvertResponse>(url);
    }

    public symbols(): Observable<SymbolResponse> {
        const url = this.path + `/symbols${this.createQueryParams()}`;
        return this.http.get(url);
    }

    public latest(query: Query): Observable<LatestResponse> {
        const url = this.path + `/latest${this.createQueryParams()}`;
        return this.http.get(url);
    }

    private createQueryParams(query?: Query): string {
        let params: string[] = [];

        if (query?.from)
            params.push('from=' + query.from);
        
        if (query?.to)
            params.push('to=' + query.to);
        
        if (query?.amount)
            params.push('amount=' + query.amount);
    
        if (query?.symbols)
            params.push('symbols=' + query.symbols);

        if (query?.base)
            params.push('base=' + query.base);

        let queryParams = '';
        if (params.length > 0) {
            queryParams = '?' + params.join('&');
        }

        return queryParams;
    }
}
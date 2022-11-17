import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ConvertQuery, ConvertResponse } from "../types/fixer";

@Injectable()
export class FixerService {

    private path = 'https://data.fixer.io/api/';

    constructor(private http: HttpClient) { }

    public convert(query: ConvertQuery): Observable<ConvertResponse> {
        const url = this.path + '/convert' + this.createQueryParams(query)
        return this.http.get(url);
    }

    private createQueryParams(query: ConvertQuery): string {
        let params = this.getAPIKey();

        if (query?.from)
            params.push('from=' + query.from);
        
        if (query?.to)
            params.push('to=' + query.to);
        
        if (query?.amount)
            params.push('amount=' + query.amount);

        let queryParams = '';
        if (params.length > 0) {
            queryParams = '?' + params.join('&');
        }

        return queryParams;
    }

    private getAPIKey(): string[] {
        let params: string[] = [];
        params.push('access_key=API_KEY');
        return params;
    } 
}
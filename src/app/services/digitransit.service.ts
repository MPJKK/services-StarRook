import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DigitransitService {

    apiURL = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

    constructor(private http: HttpClient) {
    }

    getRoutes(nimi) {

        const body = `{
            stops(name: "${nimi}"){
                name
                patterns{
                    id
                    name
                }
            }
        }
        `;

        const headers = {
            headers: new HttpHeaders().set('Content-type', 'application/graphql')
        };

        interface ReittiData {
            data: Object;
        }

        return this.http.post<ReittiData>(this.apiURL, body, headers);
    }

}

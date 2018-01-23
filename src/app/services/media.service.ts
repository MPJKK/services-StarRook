import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MediaService {

    testi = 'Tervetulemast Tallinkille';
    apiUrl = 'http://media.mw.metropolia.fi/wbma/media';

    constructor(private http: HttpClient) {
    }


    getAllMedia() {
        return this.http.get(this.apiUrl);
    }
}

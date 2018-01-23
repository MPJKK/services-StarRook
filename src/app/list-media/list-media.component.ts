import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
    selector: 'app-list-media',
    templateUrl: './list-media.component.html',
    styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

    tervehdys: string;
    kaikkiMedia: any;
    osoite = 'http://media.mw.metropolia.fi/wbma/uploads/';

    constructor(private mediaService: MediaService) {

    }

    ngOnInit() {
        this.tervehdys = this.mediaService.testi;
        this.mediaService.getAllMedia().subscribe(data => {

            this.kaikkiMedia = data;

            for (const loop of this.kaikkiMedia) {
                const temp = loop.filename.split('.');
                const uusiNimi = temp[0] + '-tn320.png';
                loop['thumbnail'] = uusiNimi;
            }

            /*

            this.kaikkiMedia.map(media => {
                const temp = media.filename.split('.');
                const uusinimi = temp[0] + '-tn320.png';
                media.thumbnail = uusinimi;
            });

             */

            console.log(this.kaikkiMedia);
        });
    }

}

import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

    pysakki = 'Gransinmäki';
    vastaus: Object;

    constructor(private digitransitService: DigitransitService) {
    }

    ngOnInit() {

        this.digitransitService.getRoutes(this.pysakki).subscribe(response => {
            console.log(response.data);
        });
    }

    onKey(event: any) {
        this.pysakki = event.target.value;
    }

    search(event: any) {
        this.digitransitService.getRoutes(this.pysakki).subscribe(response => {
            console.log(response.data);
            this.vastaus = response.data['stops'];
        });
    }

}

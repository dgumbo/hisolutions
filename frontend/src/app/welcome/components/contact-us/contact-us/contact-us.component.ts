import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
    lat: number = -17.818358;
    lng: number = 31.049104;
    markerLat: number = -17.818358;
    markerLng: number = 31.049104;
    zoom: number = 13;

    constructor() {}

    ngOnInit() {   
    }
    
    public onChooseLocation(event:any) {
        console.log(event) ;
    }
}

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    allowNewServer = false;
    serverCreated = 'no server created.';
    createServer = 'Add Server';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 5000);
    }

    ngOnInit() {
    }

    onCreateServer(){
        this.serverCreated = this.serverCreated === 'no server created.' ? 'Server Was Created!!!!!!!!!!!!!!!!!!!' : 'no server created.';
        this.createServer = this.createServer === 'Add Server' ? 'Delete Server' : 'Add Server';
    }

}

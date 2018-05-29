import { Component, OnInit, Input } from '@angular/core';
import {fadeInOut} from 'shared/components/animations/fade-in-out';
import {slideInOut} from 'shared/components/animations/slide-in-out';

@Component({
  selector: 'app-view-tab',
  templateUrl: './view-tab.component.html',
  styleUrls: ['../../../../../tab-panel.scss' ],
    animations: [fadeInOut, slideInOut]
})
export class ViewTabComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    selected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

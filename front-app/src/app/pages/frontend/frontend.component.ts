import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-frontend',
  styleUrls: ['./frontend.component.scss'],
  templateUrl: './frontend.component.html',
})
export class FrontendComponent implements OnInit, OnDestroy, AfterViewInit {

  public title = 'Wiki Enaco';

  constructor() { }

  ngOnInit() {
    
  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    // document.getElementById('nb-global-spinner').style.display = 'none';
  }
}


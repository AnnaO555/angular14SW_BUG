;
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'acoach-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(

    private _router: Router,

  ) {
    
  }


}

import { Component, OnInit } from '@angular/core';
import { AppareilViewComponent } from '../appareil-view/appareil-view.component';
import { Routes } from '@angular/router';
import { SingleAppareilComponent } from '../single-appareil/single-appareil.component';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.scss']
})
export class FourOhFourComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

}

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];


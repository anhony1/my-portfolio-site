import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
 
  }

  navigateToAboutPage(){

    this.router.navigate(['/about']);

  }


}

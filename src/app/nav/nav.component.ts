import { Component, OnInit } from '@angular/core';
import { NbTabsetModule } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  public items : NbTabsetModule[]

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { link : '/home', title : "Home", icon : 'home-outline'},
      { link : '/discussion', title : "Discussion", icon : 'message-square-outline'}
    ]
  }

}

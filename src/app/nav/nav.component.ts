import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  public items : NbMenuItem[]
  public adminMenu : NbMenuItem[]

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { link : '/home', title : "Home", icon : 'home-outline'},
      { link : '/discussion', title : "Discussion", icon : 'message-square-outline'}
    ]
  }

}

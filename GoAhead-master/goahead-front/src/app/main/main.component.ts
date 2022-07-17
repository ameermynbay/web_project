import { Component, OnInit } from '@angular/core';
import {BasicService} from '../basic.service';

import { database } from "../database"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products=database;

  constructor(private basicService: BasicService) { }

  ngOnInit(): void {
  }

  checkIfLoggedIn(){
    return this.basicService.isLoggedIn;
  }

  checkIfSuperUser(){
      return this.basicService.isSuperUser;
  }
  click(){
    alert("You left a request");
  }

}

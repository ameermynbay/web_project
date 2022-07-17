import { Component, OnInit } from '@angular/core';
import {BasicService} from '../basic.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  constructor(private router: Router, private basicService: BasicService) { }

  ngOnInit(): void {
  }

}

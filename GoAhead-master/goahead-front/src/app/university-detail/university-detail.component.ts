import { Component, OnInit } from '@angular/core';
import { BasicService } from '../basic.service'
import { University } from '../models';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.css']
})
export class UniversityDetailComponent implements OnInit {
  university: University;
  constructor(private basicService: BasicService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.university = this.basicService.getSelectedUniversity();
  }
  
}

import { Component, OnInit } from '@angular/core';
import { BasicService } from '../basic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { University } from '../models';

@Component({
  selector: 'app-universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.css']
})
export class UniversitiesListComponent implements OnInit {
  public universities: University[]=[];
  constructor(private router: Router, private basicService: BasicService) { }

  ngOnInit(): void {
      this.getUniversitiesList();
  }

  getUniversitiesList(){
      this.basicService.getUniversityList().subscribe(universities => {this.universities = universities});
  }
  selectUniversity(university: University){
    this.basicService.setUniversityForDetailView(university);
    this.router.navigateByUrl('university-detail');
}
}

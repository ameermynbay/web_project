import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicService } from '../basic.service';
import {Course, Teacher} from "../models";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course:Course;
  courseTeachers: Teacher[]=[];
  constructor(private basicService:BasicService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.course = this.basicService.getSelectedCourse();
    this.getTeacherByCourse();
  }
  
  getTeacherByCourse(){
      this.basicService.getTeachersByCourse(this.course.id.toString()).subscribe(courseTeachers=>{
          this.courseTeachers = courseTeachers
      });
  }
  


}

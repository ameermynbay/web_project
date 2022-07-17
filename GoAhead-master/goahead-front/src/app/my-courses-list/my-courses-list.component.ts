import { Component, OnInit } from '@angular/core';
import { Course } from '../models';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-my-courses-list',
  templateUrl: './my-courses-list.component.html',
  styleUrls: ['./my-courses-list.component.css']
})
export class MyCoursesListComponent implements OnInit {
  courses: Course[]=[];

  constructor(public basicService:BasicService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
   let userId = localStorage.getItem("userId")
      this.basicService.getMyCourses(userId).subscribe(courses => {
          this.courses = courses
      });
    }
    else{
      alert("YOU ARE NOT AUTHORIZED SO YOU CAN NOT SEE YOURS COURSES")
    }
    } 
    removeCourse(id){
      this.basicService.RemoveCourseFromMyList(id).subscribe(course=>{
        let userId = localStorage.getItem("userId")
      this.basicService.getMyCourses(userId).subscribe(courses => {
          this.courses = courses
      });
      })
    }
}

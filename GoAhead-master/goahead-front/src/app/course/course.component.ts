import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models';
import { BasicService } from '../basic.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input()
  course: Course;
  constructor(private basicService: BasicService, private router: Router) { }

  ngOnInit(): void {
  }

  setCourseForDetailedView(){
      this.basicService.setCourseForDetailedView(this.course);
      this.router.navigateByUrl('course-detail');
  }
  addCourseToMyList(){
    this.basicService.addCourseToMyList(this.course.id,localStorage.getItem('userId')).subscribe(course=>{
      
    });
  }
}

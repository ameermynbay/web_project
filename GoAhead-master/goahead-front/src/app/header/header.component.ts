import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BasicService } from "../basic.service";
import { Course, Teacher, University } from '../models';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {

  displayDropdownWindows = {
    courses: false,
    teachers: false,
    universities: false,
  };
  public courseList: Course[]=[];
  public teacherList: Teacher[]=[];
  public uniList: University[]=[];
  dropdownMenuDisplay(name) {
    if (name === "courses") this.displayDropdownWindows.courses = true;
    else if (name === "teachers") this.displayDropdownWindows.teachers = true;
    else if (name === "universities")
      this.displayDropdownWindows.universities = true;
  }

  dropdownMenuHide(name) {
    if (name === "courses") this.displayDropdownWindows.courses = false;
    else if (name === "teachers") this.displayDropdownWindows.teachers = false;
    else if (name === "universities")
      this.displayDropdownWindows.universities = false;
  }
  constructor(private router: Router, private basicService: BasicService) {}
  @Input()
  public isLoggedIn;
  @Input()
  public isSuperUser;
  ngOnInit(): void {
      this.basicService.getUniversityList().subscribe(res=>{
          this.uniList = res
      });
      this.basicService.getCourseList().subscribe(res=>{ this.courseList = res});
      this.basicService.getTeacherList().subscribe(res=>{this.teacherList = res});
  }
  courseItemClick(course: Course){
    this.basicService.setCourseForDetailedView(course);
      this.router.navigateByUrl('course-detail');
  }
  teacherItemClick(teacher: Teacher){
      this.basicService.setTeacherForDetailedView(teacher);
      this.router.navigateByUrl('teacher-detail')
  }
  uniItemClick(university: University){
      this.basicService.setUniversityForDetailView(university);
      this.router.navigateByUrl('university-detail');
  }
  signup() {
    this.router.navigateByUrl("signup").then();
  }
  login() {
    this.router.navigateByUrl("login").then();
  }
  logout() {
   
      localStorage.removeItem("token");
      this.basicService.isLoggedIn = false;
      this.basicService.isSuperUser = false;
      this.router.navigateByUrl("").then();
   
  }
  directToCourses(){
      this.router.navigateByUrl('courses');
  }
  directToTechers(){
      this.router.navigateByUrl('teachers');
  }
  directToUniversities(){
      this.router.navigateByUrl('universities');
  }
  directToMyCourses(){
    this.router.navigateByUrl('mycourses');
}
}
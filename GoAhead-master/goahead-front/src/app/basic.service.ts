import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Course, Token,Teacher, University, Review, User} from "./models";
import { ParentService } from './parent.service';


@Injectable({
  providedIn: 'root'
})
export class BasicService extends ParentService {
  public selectedCourse: Course;
  public selectedTeacher:Teacher;
  public selectedUniversity: University;
  public username: string;
  public isLoggedIn = false;
  public isSuperUser = false;
  BASE_URL = 'http://localhost:8000'

    constructor(http: HttpClient) {
        super(http);
    }

  //setting and getting fields for detailed view
  setCourseForDetailedView(course: Course){
      this.selectedCourse = course;
  }
  getSelectedCourse(): Course{
      return this.selectedCourse;
  }

  setTeacherForDetailedView(teacher: Teacher){
      this.selectedTeacher = teacher;
      localStorage.setItem('detailedMovie', JSON.stringify(teacher));
  }
  getSelectedTeacher(): Teacher{
      return this.selectedTeacher;
  }

  setUniversityForDetailView(university: University){
    this.selectedUniversity = university;
  }
  getSelectedUniversity(): University{
      return this.selectedUniversity;
  }

  //methods for django views
  getCourseList(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.BASE_URL}/api/courses`);
  }
  
  getTeacherList(): Observable<Teacher[]> {
      return this.http.get<Teacher[]>(`${this.BASE_URL}/api/teachers`);
  }

  getUniversityList(): Observable<University[]> {
      return this.http.get<University[]>(`${this.BASE_URL}/api/universities`);
  }

  getCourse(id): Observable<Course> {
    return this.http.get<Course>(`${this.BASE_URL}/api/courses/${id}`);
  }

  getTeacher(id): Observable<Teacher> {
      return this.http.get<Teacher>(`${this.BASE_URL}/api/teachers/${id}`);
  }
  
  getUniversity(id): Observable<University> {
    return this.http.get<University>(`${this.BASE_URL}/api/universities/${id}`);
  }
    
  getTeachersByCourse(pk: string): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.BASE_URL}/api/courses/${pk}/teachers`);
  }
    
  getUniversitiesByTeacher(id): Observable<University[]>  {
      return this.http.get<University[]>(`${this.BASE_URL}/api/teachers/${id}/university`);
  }

  getReviewsByTeacher(id): Observable<Review[]> {
      return this.http.get<Review[]>(`${this.BASE_URL}/api/teachers/${id}/reviews`);
  }

  getPositiveReviewsByTeacher(id): Observable<Review[]> {
      return this.http.get<Review[]>(`${this.BASE_URL}/api/teachers/${id}/reviews/positive`);
  }

  getNegativeReviewsByTeacher(id): Observable<Review[]> {
      return this.http.get<Review[]>(`${this.BASE_URL}/api/teachers/${id}/reviews/negative`);
  }


  deleteCourse(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/courses/${id}`);
  }
  deleteTeacher(id): Observable<any> {
      return this.http.delete(`${this.BASE_URL}/api/teachers/${id}`);
  }
  deleteUniversity(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/universities/${id}`);
  }

  

  //authentication
  createUser(usernamE: string, passworD: string, email: string) {
    return this.post(`${this.BASE_URL}/users`, {
        username: usernamE,
        password: passworD,
        email: email,
        is_superuser: true
    });
  }
  login(usernamE: string, passworD: string): Promise<Token> {
    return this.post(`${this.BASE_URL}/login/`, {
      username: usernamE,
      password: passworD
    });
  }
  logout(): Promise<any> {
    return this.post(`${this.BASE_URL}/logout/`, {});
  }

  addCourseToMyList(id,userId): Observable<Course> {
    return this.http.patch<Course>(`${this.BASE_URL}/api/courses/${id}`,{
      "user": userId
    });
  }
  RemoveCourseFromMyList(id): Observable<Course> {
    return this.http.patch<Course>(`${this.BASE_URL}/api/courses/${id}`,{
      "user": 0
    });
  }
  getUserId(name): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/users?username=${name}`);
  }
  getMyCourses(id): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.BASE_URL}/api/courses?user=${id}`);
  }
 

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ReviewComponent } from './review/review.component';
import { FormsModule } from '@angular/forms';
import { UniversitiesListComponent } from './universities-list/universities-list.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';
import { UniversityComponent } from './university/university.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';
import {AuthInterceptor} from "./auth.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MyCoursesListComponent } from './my-courses-list/my-courses-list.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseDetailComponent,
    CoursesListComponent,
    TeacherDetailComponent,
    TeachersListComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    RegistrationComponent,
    MyCoursesComponent,
    ReviewComponent,
    UniversitiesListComponent,
    UniversityDetailComponent,
    UniversityComponent,
    TeacherComponent,
    CourseComponent,
    MyCoursesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
      HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

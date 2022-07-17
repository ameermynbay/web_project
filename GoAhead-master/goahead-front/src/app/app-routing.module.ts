import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LoginComponent } from './login/login.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { UniversitiesListComponent } from './universities-list/universities-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';
import { MyCoursesListComponent } from './my-courses-list/my-courses-list.component';


const routes: Routes = [
    {path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: CoursesListComponent
            },

            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'courses',
                component: CoursesListComponent
            },
            {
                path: 'teachers',
                component: TeachersListComponent
            },
            {
                path: 'signup',
                component: RegistrationComponent
            },
            {
                path: 'universities',
                component: UniversitiesListComponent
            },
            {
                path: 'course-detail',
                component: CourseDetailComponent
            },
            {
                path: 'teacher-detail',
                component: TeacherDetailComponent
            },
            {
                path: 'university-detail',
                component: UniversityDetailComponent
            },
            {
                path: 'mycourses',
                component: MyCoursesListComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

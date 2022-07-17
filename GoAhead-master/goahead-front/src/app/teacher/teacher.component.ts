import { Component, OnInit, Input } from '@angular/core';
import { BasicService } from '../basic.service';
import { Teacher } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @Input()
  teacher:Teacher;
  constructor(private basicService: BasicService, private router: Router) { }

  ngOnInit(): void {
  }
  setTeacherForDetailedView(teacher: Teacher){
      this.basicService.setTeacherForDetailedView(this.teacher);
      this.router.navigateByUrl('teacher-detail');
  }
}
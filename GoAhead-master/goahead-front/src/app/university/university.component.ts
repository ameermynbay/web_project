import { Component, OnInit, Input } from '@angular/core';
import { University } from '../models';
import { BasicService } from '../basic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
    @Input()
    university: University;
    constructor(private basicService: BasicService, private router: Router) { }

    ngOnInit(): void {
    }
    setUniversityForDetailedView() {
        this.basicService.setUniversityForDetailView(this.university);
        this.router.navigateByUrl('university-detail')
    }
}

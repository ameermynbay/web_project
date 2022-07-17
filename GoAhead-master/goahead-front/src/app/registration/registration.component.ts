import { Component, OnInit } from '@angular/core';
import { BasicService } from '../basic.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    public password: string;
    public username: string;
    public repeatedPassword: string;
    public email: string;
    constructor(private router: Router, private basicService: BasicService) { }

    ngOnInit(): void {
    }

    closeSignUpWindow() {
        this.router.navigateByUrl('').then();
    }

    signUp() {
        if (this.username === '' || this.password === '' || this.repeatedPassword === '') {
            alert('Fill in all the fields.');
        } else {
            if (this.password !== this.repeatedPassword) {
                alert('Passwords do not match, please make sure that your passwords match.');
            } else {
                this.basicService.createUser(this.username, this.password, this.email).then(res => {
                alert('You have successfully signed up!');
                this.basicService.login(this.username, this.password).then(res => {
                   localStorage.setItem('token', res.token);
                   this.basicService.isLoggedIn = true;
                   this.router.navigateByUrl('').then();
                });
                });
            }
        }
    }
}
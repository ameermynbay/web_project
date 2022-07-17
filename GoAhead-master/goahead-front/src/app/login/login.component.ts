import { Component, OnInit } from '@angular/core';
import { BasicService } from '../basic.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  constructor(private router: Router, private basicService: BasicService) { }

  ngOnInit(): void {
  }

  closeLogInWindow(){
     this.router.navigateByUrl('').then();
  }

  login(){
      if (this.username === '' || this.password === '') {
          alert('Fill in all the fields!');
      } else {
          this.basicService.login(this.username, this.password).then(res => {
              localStorage.setItem('token', res.token);
              this.basicService.isLoggedIn = true;
              //this.isAdmin();
              this.basicService.username = this.username;
              alert('Добро пожаловать!');
              this.router.navigateByUrl('');
          })
              .catch(res => {
                  alert('You may mistyped your login or password. Try again!');
                  this.username = '';
                  this.password = '';
              });
            this.basicService.getUserId(this.username).subscribe(users=>
                {

                  
                localStorage.setItem('userId', String(users[0].id))
            });

              
      }
  }
}

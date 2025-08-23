import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Master } from '../../service/master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
loginObj:any={
   username:'',
   password:'',
}

constructor(private router:Router, private master:Master){}


  onLogin() {
    debugger;
    if (this.loginObj.username.trim() === '' || this.loginObj.password.trim() === '') {
      alert('Please enter your credentials');
      return;
    } else {
      this.master.login(this.loginObj.username, this.loginObj.password)
        .subscribe({
          next: (res) => {
            if (res && res.StatusCode === 200 && res.Data) {
              alert('Login Successful');
              //store username in localStorage
              localStorage.setItem('username',this.loginObj.username);

               //store accessCode in localStorage
              localStorage.setItem('accessCode','S82D9E4B9G2SD68SDF');
              // optionally store user info in localStorage

              localStorage.setItem('user', JSON.stringify(res.Data));
              this.router.navigate(['/dashboard']);
            } else {
              alert(res?.Message || 'Invalid login credentials');
            }
          },
          error: (err) => {
            console.error(err);
            alert('Something went wrong. Please try again later.');
          }
        });
    }
  }
}

import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';

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

constructor(private router:Router){}

onLogin(){
  if(this.loginObj.username.trim()==''|| this.loginObj.password.trim()==''){
    alert('Please enter your credentials')
  }
  else{
     if(this.loginObj.username=="admin" && this.loginObj.password=="admin786"){

      this.router.navigate(['/dashboard']);
      alert("Login Successful")
      }
       else{
      alert("Wrong credentials");
        }
     }
 

}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private auth:AuthServiceService,private route:Router) { }

  loginForm = this.fb.group({
    Email:['',Validators.required],
    Password:['',Validators.required],
  })

  get Email(){
    return this.loginForm.get('Email');
  }
  get Password(){
    return this.loginForm.get('Password');
  }

  submit(){
    if(!this.loginForm.valid){
      return;
    }
    const{ Email, Password} = this.loginForm.value;
    this.auth.login(Email,Password).subscribe(()=>{
      this.route.navigate(['/quiz'])
    })
  }
  ngOnInit(): void {
  }

}

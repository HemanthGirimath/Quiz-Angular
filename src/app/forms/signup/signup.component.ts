import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router, private auth:AuthServiceService) { }

  signupForm = this.fb.group({
    Email:['',Validators.required],
    Password:['',Validators.required]
  });

  get Email(){
    return this.signupForm.get('Email');
  }

  get Password(){
    return this.signupForm.get('Password');
  }

  submit(){
    if(!this.signupForm.valid){
      return
    }
    const {Email, Password} = this.signupForm.value;
    this.auth.signup(Email,Password).subscribe(()=>this.router.navigate(['/quiz']))
  }

  ngOnInit(): void {
  }

}

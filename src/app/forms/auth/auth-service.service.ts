import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private quth:Auth) { }

  signup(name:string,password:string){
    return from(createUserWithEmailAndPassword(this.quth,name,password));
  }

  login(username:string,password:string){
    return from(signInWithEmailAndPassword(this.quth,username,password));
  }

  logout(){
    return from(this.quth.signOut());
  }
}

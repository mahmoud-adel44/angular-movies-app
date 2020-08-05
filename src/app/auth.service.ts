import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable , BehaviorSubject} from 'rxjs';
import {UserData} from 'userData'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _HttpClient:HttpClient) { }

  userData = new BehaviorSubject (null);

  signUp(data):Observable<any>
  {
     return this._HttpClient.post('http://routeegypt.herokuapp.com/signup' , data)
  }
  signIn(data):Observable<any>
  {
     return this._HttpClient.post('http://routeegypt.herokuapp.com/signin' , data)
     
  }
  saveUserData(user , token)
  {
    let users = new UserData(user.first_name ,user.last_name , user.email ,token);
    this.userData.next(users)
  }
}

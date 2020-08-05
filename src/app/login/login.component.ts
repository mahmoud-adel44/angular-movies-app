import { Component, OnInit } from '@angular/core';

import {FormControl , FormGroup , Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  err:string;
  signinForm:FormGroup = new FormGroup({
  
    
    'email':new FormControl(null , [Validators.email , Validators.required]),
    'password':new FormControl(null , Validators.required)



  });

  constructor(public _AuthService:AuthService , public _Router:Router) { }

  ngOnInit(): void {
  }

   getFormData(formData)
   {
    // this._AuthService.signUp(formData.value).subscribe(data => {
      // if(data.message=='success')
      // {
      //   this._Router.navigate(['/login'])
      // }
      // else
      // {
      //    this.err = 'mail is already registered'
      // }
      
    // });
     this._AuthService.signIn(formData.value).subscribe(data =>{
              if(data.message= 'success')
              {
                this._AuthService.saveUserData(data.user , data.token)
                this._Router.navigate(['/home'])
                //console.log(data);
              }
     });

 }
}

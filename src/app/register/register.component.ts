import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  err: string;
  registerForm: FormGroup = new FormGroup({

    'first_name': new FormControl(null, [Validators.minLength(3), Validators.maxLength(8), Validators.required]),
    'last_name': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'password': new FormControl(null, Validators.required)



  })

  constructor(public _AuthService: AuthService, public _Router: Router) { }

  ngOnInit(): void {
  }


  getFormData(formData) {
    this._AuthService.signUp(formData.value).subscribe(data => {
      if (data.message == 'success') {
        this._Router.navigate(['/login'])
      }
      else {
        this.err = 'mail is already registered'
      }
    });
    //console.log(formData.value)
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  islogin:boolean = false;
  constructor(public _AuthService:AuthService) {
  //  if(_AuthService.userData) 
  //  {
  //    this.islogin = true;
  //  }
  //  else
  //  {
  //    this.islogin = false;
  //  }
  //----------------------------
  // if( _AuthService.userData.getValue())
  // {
  //   this.islogin=true;
  // }
  // else
  // {
  //   this.islogin=false;
  // }

  //----------------------------------
  _AuthService.userData.subscribe(data=>{

    if(data)
    {
      this.islogin=true;
    }
    else
    {
      this.islogin=false;
    }
  });
}

  ngOnInit(): void {
  }

}

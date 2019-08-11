import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { ApiService } from '../api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  id1: number;
  flag: number = 0;
  users: User[];

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private apiService: ApiService ) { }

  get formControls() { return this.loginForm.controls; }

  login(){

    //console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    else
    {
      for(var i=0;i<this.users.length;i++)
      {
        if( this.users[i].email==this.loginForm.value.email && this.users[i].password==this.loginForm.value.password )
        {
            this.id1 = this.users[i].id;
            this.apiService.id=this.id1;
            console.log(this.users[i].interests)
            this.apiService.interests=this.users[i].interests;
            //alert(this.id);
            this.flag=1;
            break;
        }
      }     

      if(this.flag==0)
      {
        swal.fire("Invalid User","Please verify credentials","error");
      }
      else
      {
        this.authService.login(this.loginForm.value);
        this.router.navigateByUrl('/shelf');
      }
    }

  }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.apiService.readUsers().subscribe((users: User[])=>{
      this.users = users;
      //console.log(users);
    });
  }

}

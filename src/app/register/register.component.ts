import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { ApiService } from '../api.service';
import { ValidationService } from '../validation.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    selectedUser:  User  = { id :  null, name: null ,email:  null , password:  null , interests: null};
    registerForm: FormGroup;
    isSubmitted  =  false;
  
    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ,private apiService: ApiService) { 
      this.registerForm  =  this.formBuilder.group({
        email: ['', [Validators.required,ValidationService.emailValidator]],
        password: ['', [Validators.required,ValidationService.passwordValidator]],
        name: ['', [Validators.required,Validators.minLength(6)]],
    });
    }
  
    get formControls() { return this.registerForm.controls; }
  
    register(){
      //console.log(this.registerForm.value);
      this.isSubmitted = true;
      if(this.registerForm.invalid){
        return;
      }
      //this.selectedUser.name=this.registerForm.value.name;
      //this.selectedUser.email=this.registerForm.value.email;
      //this.selectedUser.password=this.registerForm.value.password;

      this.authService.login(this.registerForm.value);
      this.apiService.registerUser(this.registerForm.value).subscribe((user: User)=>{
        console.log(" User Registered, ", user);
      });
      if (this.registerForm.dirty && this.registerForm.valid) {
        // alert(`Name: ${this.registerForm.value.name} Email: ${this.registerForm.value.email}`);
        swal.fire("Registration Successful","Please Log In","success");
        this.router.navigateByUrl('/homepage');
      }
      
    }
  
  
  
    ngOnInit() {
      
    }
  
  }
  

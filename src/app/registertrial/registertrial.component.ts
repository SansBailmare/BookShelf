import { Component ,OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-registertrial',
  templateUrl: './registertrial.component.html',
  styleUrls: ['./registertrial.component.css']
})
export class RegistertrialComponent implements OnInit {
  userForm: any;

  constructor(private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'profile': ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }

  ngOnInit() {
  }

}

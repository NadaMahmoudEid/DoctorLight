import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  constructor(private formBuilder: FormBuilder) { }

  LoginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    
    password: ['', [Validators.required ,Validators.minLength(6),Validators.maxLength(10)]],
   
  });
  get UserName() {
    return this.LoginForm.get('username');
  }

  get password() {
    return this.LoginForm.get('password');
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.LoginForm.valid) {
      console.log('Form submitted!');
      console.log('', this.LoginForm.value);
    } else {
      console.log('Not Valid.');

    }
  }
  GoPage(){
    
  }
  
  }



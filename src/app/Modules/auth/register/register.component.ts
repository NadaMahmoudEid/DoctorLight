import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder) { }
  RegistrationForm = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(5)]],
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern('01[0-2]{1}[0-9]{8}')]],
    age: ['', [Validators.required, Validators.min(15)]],
    height: ['', [Validators.required]],
    weight: ['', [Validators.required]],
    chronicDisease: [''],
    // goal: this.formBuilder.group({
    //   weightLoss: [false],
    //   weightGain: [false],
    //   muscleBuilding: [false]
    // }),
    optionsRun: ['', [Validators.required]],
    optionsWalk: ['', [Validators.required]],
    optionsSleep: ['', [Validators.required]],
    // optionsGoal: ['', [Validators.required]]
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  get OptionRun() {
    return this.RegistrationForm.get('optionsRun');
  }
  // get OptionsGoal() {
  //   return this.RegistrationForm.get('OptionsGoal');
  // }
  get OptionWalk() {
    return this.RegistrationForm.get('optionsWalk');
  }
  get OptionSleep() {
    return this.RegistrationForm.get('optionsSleep');
  }
  get UserName() {
    return this.RegistrationForm.get('userName');
  }
  get fullName() {
    return this.RegistrationForm.get('fullName');
  }
  get email() {
    return this.RegistrationForm.get('email');
  }
  get phoneNumber() {
    return this.RegistrationForm.get('phoneNumber');
  }
  get password() {
    return this.RegistrationForm.get('password');
  }
  get confirmPassword() {
    return this.RegistrationForm.get('confirmPassword');
  }
  get age() {
    return this.RegistrationForm.get('age');
  }
  get height() {
    return this.RegistrationForm.get('height');
  }
  get weight() {
    return this.RegistrationForm.get('weight');
  }


  onSubmit() {
    if (this.RegistrationForm.valid) {
      console.log('Form submitted!');
      console.log('Selected options:', this.RegistrationForm.value);
    } else {
      console.log('Please check at least one option.');
      console.log('Selected options:', this.RegistrationForm.value)
    }
  }

  goPage(){

  }
}

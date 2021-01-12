import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  userForm: FormGroup;

  constructor(private firebaseService: FirebaseService,public fb: FormBuilder) { }

  ngOnInit() {

    this.userForm = this.fb.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      Profession:['',[Validators.required]]
    })
  }

  CreateAccount() {
    console.log(this.userForm.value);
    this.firebaseService.Create("User",this.userForm.value).then(resp => {
      this.userForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

}

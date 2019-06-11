import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  /*loginForm = this.fb.group({
    username: [''],
    password: ['', Validators.required]
  });*/

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();

   }

   createForm(){
     this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
     })
   }

  ngOnInit() {
  }

}

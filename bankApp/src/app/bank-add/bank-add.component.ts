import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.css']
})
export class BankAddComponent implements OnInit {

/*newForm = this.fb.group({
  username: [''],
  password: [''],
  firstName: [''],
  lastName: ['']
}) */

newForm: FormGroup;

constructor(private fb: FormBuilder, private us: UsersService) {
    this.createForm();
  }
  
createForm(){
  this.newForm = this.fb.group({
  username: ['', Validators.required],
  password: ['', Validators.required],
  first_name: [''],
  last_name: ['']
  });
}
   
addUsers(  username: String, password: String, first_name: String, last_name: String ){
  this.us.addUsers(username, password, first_name, last_name);
}

/*testClick(){
  console.log('test click');
}*/

ngOnInit() {
  
  }


onSubmit(){
    if(this.newForm.valid){
      alert('User form is valid!!')
    } else {
      alert('User form is not valid!!')
    }
  }

  
}

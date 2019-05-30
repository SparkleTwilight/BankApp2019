
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BankAddComponent } from './bank-add/bank-add.component';
import { BankGetComponent } from './bank-get/bank-get.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';

import { MatToolbarModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatIconModule, 
  MatButtonModule, 
  MatCardModule, 
  MatTableModule, 
  MatDividerModule, 
  MatSnackBarModule } from '@angular/material';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './info/about/about.component';
import { ContactComponent } from './info/contact/contact.component';

import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestFormComponent } from './test-form/test-form.component';
import { ProfileTestComponent } from './profile-test/profile-test.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    BankAddComponent,
    BankGetComponent,
    BankEditComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    TestFormComponent,
    ProfileTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAddComponent } from './bank-add/bank-add.component';
import { BankGetComponent } from './bank-get/bank-get.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './info/about/about.component';
import { ContactComponent } from './info/contact/contact.component';
import { TestFormComponent } from './test-form/test-form.component';
import { ProfileTestComponent } from './profile-test/profile-test.component';

const routes: Routes = [
  {
    path: 'create/bank-add',
    component: BankAddComponent
  },
  {
    path: 'update/bank-edit/:id',
    component: BankEditComponent
  },
  {
    path: 'list/bank-get',
    component: BankGetComponent
  },
  {
    path: 'info/about',
    component: AboutComponent
  },
  {
    path: 'info/contact',
    component: ContactComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'test-form',
    component: TestFormComponent
  },
  {
    path: 'profile-test',
    component: ProfileTestComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

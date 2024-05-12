import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { DepartmentUpdateComponent } from './department/department-update/department-update.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'home', component:HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'students',
    component: StudentListComponent,
    children: [
      { path: 'add', component: StudentAddComponent },
      { path: 'details/:id', component: StudentDetailsComponent },
      { path: 'update/:id', component: StudentUpdateComponent },
    ],
  },
  {
    path: 'departments',
    component: DepartmentListComponent,
    children: [
      { path: 'add', component: DepartmentAddComponent },
      { path: 'details/:id', component: DepartmentDetailsComponent },
      { path: 'update/:id', component: DepartmentUpdateComponent },
    ],
  },
  { path: '**', component: NotfoundComponent },
];

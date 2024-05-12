import { Component, OnInit } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../Services/department.service';
import { DepartmentAddComponent } from '../department-add/department-add.component';
import { DepartmentUpdateComponent } from './../department-update/department-update.component';
import { DepartmentDetailsComponent } from './../department-details/department-details.component';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [
    DepartmentAddComponent,
    DepartmentDetailsComponent,
    DepartmentUpdateComponent,
  ],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];
  department: Department | undefined;
  updatedDepartment!: Department;
  deleteDepartmentIndex: number = -1;

  constructor(private departmentService: DepartmentService) {}
  ngOnInit() {
    this.departments = this.departmentService.getAll();
  }

  showDetails(id: number) {
    const dept = this.departmentService.getById(id);
    this.department = this.department === dept ? undefined : dept;
  }

  openUpdateModal(dept: Department) {
    this.updatedDepartment = { ...dept };
  }

  delete(index: number) {
    this.departmentService.delete(index);
  }
}

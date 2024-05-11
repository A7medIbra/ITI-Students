import { departments } from './../../../assets/data/departments';
import { Component, Input } from '@angular/core';
import { Department } from '../../../models/department';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../Services/department.service';

@Component({
  selector: 'app-department-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-update.component.html',
  styleUrl: './department-update.component.css',
})
export class DepartmentUpdateComponent {
  departments!: Department[];
  @Input() selectedDepartment!: Department;

  constructor(private departmentService: DepartmentService) {
    this.departments = departmentService.getAll();
  }

  update() {
    const index = this.departments.findIndex(
      (dept) => dept.id === this.selectedDepartment.id
    );
    this.departmentService.update(index, this.selectedDepartment);
    this.selectedDepartment = new Department(0, '', '', '');
  }
}

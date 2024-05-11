import { Injectable } from '@angular/core';
import { Department } from '../../models/department';
import { departments } from './../../assets/data/departments';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private departments: Department[] = departments;
  constructor() {}

  getAll(): Department[] {
    return this.departments;
  }

  getById(id: number): Department | undefined {
    return this.departments.find((dep) => dep.id === id);
  }

  add(dep: Department): void {
    this.departments.push(dep);
  }

  delete(index: number): void {
    this.departments.splice(index, 1);
  }

  update(index: number, dep: Department): void {
    this.departments[index] = {...dep };
  }
}

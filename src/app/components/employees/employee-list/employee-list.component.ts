import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit{

  employees: Employee[] = [
    {
      id: '1',
      name: 'Des',
      email: "des@gmail.com",
      phone: 5195469876,
      salary: 50000,
      department: 'Chemistry'
    },
    {
      id: '2',
      name: 'Des',
      email: "des@gmail.com",
      phone: 5195469876,
      salary: 50000,
      department: 'Chemistry'
    },
    {
      id: '3',
      name: 'Des',
      email: "des@gmail.com",
      phone: 5195469876,
      salary: 50000,
      department: 'Chemistry'
    }
  ];

  ngOnInit(): void {
    this.employees.push()
  }
}

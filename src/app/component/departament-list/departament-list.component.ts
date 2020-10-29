import { Component, OnDestroy, OnInit } from '@angular/core';
import { Departament } from 'src/app/domain/departament';
import { CourseService } from 'src/app/service/course.service';
import { DepartamentService } from 'src/app/service/departament.service';
import {Subscription} from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-departament-list',
  templateUrl: './departament-list.component.html',
  styleUrls: ['./departament-list.component.css']
})
export class DepartamentListComponent implements OnInit,OnDestroy {

  public departament: Departament [];
  public subDepartament : Subscription;
  constructor(public departamentService : DepartamentService) { }
  ngOnDestroy(): void {
    this.subDepartament.unsubscribe();
  }

  ngOnInit(): void {
  
  this.getAll();
  
  }

getAll(){

this.subDepartament = this.departamentService.getAll().subscribe(data=>{
this.departament = data;


})
}


}

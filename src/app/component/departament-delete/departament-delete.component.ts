import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departament } from 'src/app/domain/departament';
import { DepartamentService } from 'src/app/service/departament.service';

@Component({
  selector: 'app-departament-delete',
  templateUrl: './departament-delete.component.html',
  styleUrls: ['./departament-delete.component.css']
})
export class DepartamentDeleteComponent implements OnInit {


  public id : number;
  public departament : Departament;
  public showMsg : boolean = false;
  public msg : string ;
  public type : string;
  constructor(public departamentService : DepartamentService,private router : Router,private activatedRouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }
  public getById(){
    let param = this.activatedRouter.params['_value'];
    this.id = param.id;
 
    this.departamentService.getById(this.id).subscribe(data =>{
      this.departament = data;
    });
  }
  public delete(){
    

    this.departamentService.delete(this.departament.DepartmentID).subscribe(data => {
      this.router.navigate(['/departament-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}

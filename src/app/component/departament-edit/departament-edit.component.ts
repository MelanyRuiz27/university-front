import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Departament } from 'src/app/domain/departament';
import { Docent } from 'src/app/domain/docent';
import { DepartamentService } from 'src/app/service/departament.service';
import { DocentService } from 'src/app/service/docent.service';

@Component({
  selector: 'app-departament-edit',
  templateUrl: './departament-edit.component.html',
  styleUrls: ['./departament-edit.component.css']
})
export class DepartamentEditComponent implements OnInit, OnDestroy {
  public id : number;
  public departament : Departament;
  public showMsg : boolean = false;
  public msg : string ;
  public type : string;

  public docent: Docent[];
  public subDocent: Subscription;

  constructor(public departamentService : DepartamentService,
    public docenteService: DocentService,
    private router : Router,
    private activatedRouter : ActivatedRoute) { }

  ngOnDestroy(): void {
    this.subDocent.unsubscribe();
  }

  ngOnInit(): void {
    this.getById();
    this.getAllDocent();
  }
  public getById(){
    let param = this.activatedRouter.params['_value'];
    this.id = param.id;
 
    this.departamentService.getById(this.id).subscribe(data =>{
      this.departament = data;
    });
  }

  getAllDocent() {
    this.subDocent = this.docenteService.getAll().subscribe(data => {
      this.docent = data;
    });

  }
  public edit(){
    
      console.log(this.departament);
  
      this.departamentService.edit(this.departament).subscribe(data => {
        this.router.navigate(['/departament-list']);
      }, error => {
        console.log(error);
        this.showMsg = true;
        this.msg = 'An error has ocurred in the procedure';
        this.type = 'danger';
      });
    }
  }


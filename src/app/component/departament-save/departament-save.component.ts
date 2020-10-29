import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Departament } from 'src/app/domain/departament';
import { Docent } from 'src/app/domain/docent';
import { DepartamentService } from 'src/app/service/departament.service';
import { DocentService } from 'src/app/service/docent.service';

@Component({
  selector: 'app-departament-save',
  templateUrl: './departament-save.component.html',
  styleUrls: ['./departament-save.component.css']
})
export class DepartamentSaveComponent implements OnInit, OnDestroy {

  public departament: Departament;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;

  public docent: Docent[];
  public subDocent: Subscription;

  constructor(public departamentService: DepartamentService,
    public docenteService: DocentService,
    private router: Router) { }

  ngOnDestroy(): void {
    this.subDocent.unsubscribe();
  }

  ngOnInit(): void {
    this.departament = new Departament(0, '', 0, '', 0);
    this.getAllDocent();
  }

  getAllDocent() {
    this.subDocent = this.docenteService.getAll().subscribe(data => {
      this.docent = data;
    });
  }

  public save() {

    console.log(this.departament);
    this.departamentService.save(this.departament).subscribe(date => {

      this.router.navigate(['/departament-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurrend in the procedure';
      this.type = 'danger';

    });

  }
}

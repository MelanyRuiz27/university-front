import { Component, OnInit, OnDestroy } from '@angular/core';
import { Docent } from 'src/app/domain/docent';
import { DocentService } from 'src/app/service/docent.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-docent-list',
  templateUrl: './docent-list.component.html',
  styleUrls: ['./docent-list.component.css']
})
export class DocentListComponent implements OnInit, OnDestroy {


  public docent: Docent[];
  public subDocent: Subscription;
  constructor(public docenteService: DocentService) { }
  ngOnDestroy(): void {
    this.subDocent.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {

    this.subDocent = this.docenteService.getAll().subscribe(data => {

      this.docent = data;

    });

  }
}




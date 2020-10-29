import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Docent } from 'src/app/domain/docent';
import { DocentService } from 'src/app/service/docent.service';

@Component({
  selector: 'app-docent-save',
  templateUrl: './docent-save.component.html',
  styleUrls: ['./docent-save.component.css']
})
export class DocentSaveComponent implements OnInit {

  public docent : Docent;
  public showMsg : boolean = false;
  public msg : string ;
  public type : string;

  constructor(public docentService : DocentService,private router : Router) { }

  ngOnInit(): void {
    this.docent = new Docent (0,'','','');
  }

  public save (){

    console.log(this.docent);
    this.docentService.save(this.docent).subscribe(date =>{

      this.router.navigate(['/docent-list']);
    },error =>{
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurrend in the procedure';
      this.type = 'danger';

    });

  }
}
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Docent } from 'src/app/domain/docent';
import { DocentService } from 'src/app/service/docent.service';

@Component({
  selector: 'app-docent-edit',
  templateUrl: './docent-edit.component.html',
  styleUrls: ['./docent-edit.component.css']
})
export class DocentEditComponent implements OnInit {

  public id : number;
  public docent : Docent;
  public showMsg : boolean = false;
  public msg : string ;
  public type : string;

  constructor(public docentService : DocentService,private router : Router,private activatedRouter : ActivatedRoute) { }

  ngOnInit(): void {
 this.getById();
 
  }

  
  public getById(){
    let param = this.activatedRouter.params['_value'];
    this.id = param.id;
 
    this.docentService.getById(this.id).subscribe(data =>{
      this.docent = data;
    });
  }
public edit(){

  
    console.log(this.docent);

    this.docentService.edit(this.docent).subscribe(data => {
      this.router.navigate(['/docent-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }
}


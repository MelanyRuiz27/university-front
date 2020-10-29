import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//COURSE
import { CourseService } from './service/course.service';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseSaveComponent } from './component/course-save/course-save.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';

//STUDENT
import { StudentService } from './service/student.service';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentSaveComponent } from './component/student-save/student-save.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';

//DEPARTAMENT
import { DepartamentService } from './service/departament.service';
import { DepartamentListComponent } from './component/departament-list/departament-list.component';

import { DepartamentSaveComponent } from './component/departament-save/departament-save.component';


//DOCENTE
import { DocentService } from './service/docent.service';
import { DocentListComponent } from './component/docent-list/docent-list.component';
import { DocentSaveComponent } from './component/docent-save/docent-save.component';
import { DocentEditComponent } from './component/docent-edit/docent-edit.component';
import { DepartamentEditComponent } from './component/departament-edit/departament-edit.component';
import { DocentDeleteComponent } from './component/docent-delete/docent-delete.component';
import { DepartamentDeleteComponent } from './component/departament-delete/departament-delete.component';


//ta bien puej no toco, si necesita ayuda me dice ya no voy a irme

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseSaveComponent,
    CourseEditComponent,
    StudentListComponent,
    StudentSaveComponent,
    StudentEditComponent,
    DepartamentListComponent,
    CourseDeleteComponent,
    StudentDeleteComponent,
    DocentListComponent,
    DocentSaveComponent,
    DepartamentSaveComponent,
    DocentEditComponent,
    DepartamentEditComponent,
    DocentDeleteComponent,
    DepartamentDeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CourseService,
    StudentService,
    DepartamentService,
    DocentService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }

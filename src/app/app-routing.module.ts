import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseSaveComponent } from './component/course-save/course-save.component';
import { DepartamentDeleteComponent } from './component/departament-delete/departament-delete.component';
import { DepartamentEditComponent } from './component/departament-edit/departament-edit.component';
import { DepartamentListComponent } from './component/departament-list/departament-list.component';
import { DepartamentSaveComponent } from './component/departament-save/departament-save.component';
import { DocentDeleteComponent } from './component/docent-delete/docent-delete.component';
import { DocentEditComponent } from './component/docent-edit/docent-edit.component';
import { DocentListComponent } from './component/docent-list/docent-list.component';
import { DocentSaveComponent } from './component/docent-save/docent-save.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentSaveComponent } from './component/student-save/student-save.component';

const routes: Routes = [
  //COURSE
  { path: 'course-list', component: CourseListComponent},
  { path: 'course-save', component: CourseSaveComponent},
  { path: 'client-edit/:id', component: CourseEditComponent},
  { path: 'client-delete/:id', component: CourseDeleteComponent},
  //STUDENT
  { path: 'student-list', component: StudentListComponent},
  { path: 'student-save', component: StudentSaveComponent},
  { path: 'clientS-edit/:id', component: StudentEditComponent},
  { path: 'clientS-delete/:id', component: StudentDeleteComponent},

  //DEPARTAMENT
  { path: 'departament-list', component: DepartamentListComponent},
  { path: 'departament-save', component: DepartamentSaveComponent},
  { path: 'clientDPT-edit/:id', component: DepartamentEditComponent},
  { path: 'clientDPT-delete/:id', component: DepartamentDeleteComponent},


  
  //DOCENT

  { path: 'docent-list', component: DocentListComponent},
  { path: 'docent-save', component: DocentSaveComponent},
  { path: 'clientD-edit/:id', component: DocentEditComponent},
  { path: 'clientD-delete/:id', component: DocentDeleteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

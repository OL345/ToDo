import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ContentComponent } from './content/content.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: '', component: ContentComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

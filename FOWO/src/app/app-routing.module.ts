import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ViewAsListComponent } from './view-as-list/view-as-list.component';
import { ViewAsTableComponent } from './view-as-table/view-as-table.component';

const routes: Routes = [
  {path: '', component: ContentComponent},   
  {path: 'list', component: ViewAsListComponent},
  {path: 'table', component: ViewAsTableComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

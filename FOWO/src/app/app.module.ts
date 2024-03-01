import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BoxComponent } from './box/box.component';
import { ContentComponent } from './content/content.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { ViewAsListComponent } from './view-as-list/view-as-list.component'; 
import { UpdateTaskDialogComponent } from './update-task-dialog/update-task-dialog.component';
import { DeleteTaskDialogComponent } from './delete-task-dialog/delete-task-dialog.component';
import { AddTodoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';
import { ViewAsTableComponent } from './view-as-table/view-as-table.component'; 

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkAccordionModule } from '@angular/cdk/accordion'; 
import {  MatMenuModule} from '@angular/material/menu';
import {  MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BoxComponent,
    ContentComponent,
    AddComponent,
    DetailComponent,
    UpdateTaskDialogComponent,
    DeleteTaskDialogComponent,
    AddTodoDialogComponent,
    ViewAsListComponent,
    ViewAsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatInputModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule,
    CdkAccordionModule,
    MatMenuModule,
    MatTableModule,
    BrowserAnimationsModule,
  ],
  providers: [
    // No need to provide anything here
  
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

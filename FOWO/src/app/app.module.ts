import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BoxComponent } from './box/box.component';
import { ContentComponent } from './content/content.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateTaskDialogComponent } from './update-task-dialog/update-task-dialog.component';
import { DeleteTaskDialogComponent } from './delete-task-dialog/delete-task-dialog.component';
import { AddTodoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip'; 


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatDatepickerModule, // Correct import
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
  ],
  providers: [
    // No need to provide anything here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

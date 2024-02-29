import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { termin } from '../interfaces/termin';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoDialogComponent } from '../add-todo-dialog/add-todo-dialog.component';

@Component({
  selector: 'app-view-as-list',
  templateUrl: './view-as-list.component.html',
  styleUrl: './view-as-list.component.css'
})
export class ViewAsListComponent {
  termine: termin[] = [];

  public termine$: Observable<termin[]>;

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog, private _data: DataService) {
    this.termine$ = this._data.fetchData2();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      width: '400px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const titleValue = result.title as string; 
        const descriptionValue = result.description as string;
        console.log(titleValue, descriptionValue)
    const newTodo = { title: titleValue, description: descriptionValue, done: false };
      
    this.http.post<any>('api/add-todo', newTodo).subscribe(
      (response) => {
        console.log('New Todo added successfully!', response);
        this._data.fetchData2();
        this.router.navigateByUrl('/list');
      },
      (error) => {
        console.error('Error adding Todo:', error);
      }
    ); 
      }
    });
  }

  
}

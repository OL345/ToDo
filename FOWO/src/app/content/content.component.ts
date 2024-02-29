import { Component } from '@angular/core';
import { termin } from '../interfaces/termin';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { AddTodoDialogComponent } from '../add-todo-dialog/add-todo-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  termine: termin[] = [];

  public termine$: Observable<termin[]>;

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog, private _data: DataService) {
    this.termine = this._data.getData();

    this.termine$ =_data.fetchData2();
  }

  public fetchData() {
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
        this.fetchData();
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.error('Error adding Todo:', error);
      }
    ); 
      }
    });
  }
}

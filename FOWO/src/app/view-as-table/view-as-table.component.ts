import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { termin } from '../interfaces/termin';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddTodoDialogComponent } from '../add-todo-dialog/add-todo-dialog.component';

@Component({
  selector: 'app-view-as-table',
  templateUrl: './view-as-table.component.html',
  styleUrls: ['./view-as-table.component.css']
})
export class ViewAsTableComponent {
  termine$: Observable<termin[]>;

  displayedColumns: string[] = ['ID', 'Title', 'Description', 'Done'];

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
          this.router.navigateByUrl('/table');
        },
        (error) => {
          console.error('Error adding Todo:', error);
        }
      ); 
      }
    });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { termin } from '../interfaces/termin';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTaskDialogComponent } from '../update-task-dialog/update-task-dialog.component';
import { DataService } from '../services/data.service';
import { DeleteTaskDialogComponent } from '../delete-task-dialog/delete-task-dialog.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  @Input() input_data!: termin;
  tasks: termin[] = [];

  @Output() updatedData = new EventEmitter();
  @Output() deletedData = new EventEmitter();
  @Output() markedData = new EventEmitter();
  @Output() markedData2 = new EventEmitter();

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog, private _data: DataService) {}
  
  openUpdateDialog(): void {
    const dialogRef = this.dialog.open(UpdateTaskDialogComponent, {
      width: '400px',
      data: { title: this.input_data.title, description: this.input_data.description }
    });

    dialogRef.afterClosed().subscribe(updatedData => {      
      if (updatedData) {
        const updatedTask: termin = {
          id: this.input_data.id,
          title: updatedData.title,
          description: updatedData.description,
          done: false,
        };

        this.http.put(`api/edit/${this.input_data.id}`, updatedTask)
          .subscribe(
            () => {
              console.log(`Task with ID ${this.input_data.id} updated successfully.`);
              this.updatedData.emit();
            },
            error => {
              console.error('Error updating task:', error);
            }
          );
      }
    });
  }
  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteTaskDialogComponent, {
      width: '400px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.delete(`api/delete-todo/${this.input_data.id}`).subscribe(
          () => {
            console.log({message: `Task with ID ${this.input_data.id} deleted successfully.`});
            // Emit event after successful deletion
            this.deletedData.emit();
          },
          error => {
            console.error('Error deleting task:', error);
          }
        );
      }
    });
  }  

  mark_as_done(taskId: number): void {
    const url = `api/mark-as-done/${taskId}`;
    this.http.put<void>(url, {}).subscribe(
      () => {
        console.log(`Task with ID ${taskId} marked as done successfully.`);
        // Optionally, perform any action after marking the task as done
        this.markedData.emit();
      },
      error => {
        console.error('Error marking task as done:', error);
      }
    );
  }
  
  mark_as_todo(taskId: number): void {
    const url = `api/mark-as-todo/${taskId}`;
    this.http.put<void>(url, {}).subscribe(
      () => {
        console.log(`Task with ID ${taskId} marked as todo successfully.`);
        // Optionally, perform any action after marking the task as done
        this.markedData2.emit();
      },
      error => {
        console.error('Error marking task as done:', error);
      }
    );
  }
  
}

import { Component, Input } from '@angular/core';
import { termin } from '../interfaces/termin';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTaskDialogComponent } from '../update-task-dialog/update-task-dialog.component';
import { DataService } from '../services/data.service';
import { DeleteTaskDialogComponent } from '../delete-task-dialog/delete-task-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() input_data!: termin;
  tasks: termin[] = [];

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog, private _data: DataService, private snackBar: MatSnackBar,) {
    this.fetchData();
  }

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
          description: updatedData.description
        };

        this.http.put(`http://localhost:3000/edit/${this.input_data.id}`, updatedTask)
          .subscribe(
            () => {
              console.log(`Task with ID ${this.input_data.id} updated successfully.`);
              this.fetchData();
              this.router.navigateByUrl('/');
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
        this.deleteTask(this.input_data.id);
      }
    });
  }

  deleteTask(taskId: number): void {
    this.http.delete(`http://localhost:3000/delete-todo/${taskId}`).subscribe(
      () => {
        console.log(`Task with ID ${taskId} deleted successfully.`);
        this.fetchData;
        this.openRefreshSnackbar();
      },
      error => {
        console.error('Error deleting task:', error);
      }
    );
  }

  fetchData(): void {
    this.http.get<termin[]>('http://localhost:3000/tasks').subscribe(
      tasks => {
        this.tasks = tasks;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  openRefreshSnackbar(): void {
  const snackBarRef = this.snackBar.open('Data updated successfully.', 'Refresh', {
    duration: 5000, // Adjust as needed
  });

  snackBarRef.onAction().subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([this.router.url]);
      });
    });
  }
  }

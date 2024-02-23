import { Component, Input } from '@angular/core';
import { getLocaleEraNames } from '@angular/common';
import { termin } from '../interfaces/termin';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})

export class BoxComponent {
  @Input() input_data!: termin;

  constructor(private _data: DataService, private http: HttpClient, private router: Router) {}

  deleteTask(taskId: number): void {
    this.http.delete(`http://localhost:3000/delete-todo/${taskId}`).subscribe(
      () => {
        console.log(`Task with ID ${taskId} deleted successfully.`);
      },
      (error) => {
        console.error('Error deleting task:', error);
      }
    );
    this.router.navigateByUrl('/');
  }
}

import { Component, Input } from '@angular/core';
import { termin } from '../interfaces/termin';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() input_data!: termin;

  constructor(private http: HttpClient, private router: Router) {}

  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  editTodo: termin = { id: 0, title: '', description: '' };

  editTask(taskId: number, updatedTask: any): void {


    const titleValue = this.taskForm.value.title as string;
    const descriptionValue = this.taskForm.value.description as string;
    
    console.log(taskId)
    console.log(titleValue)
    console.log(descriptionValue)
    
    this.http.put(`http://localhost:3000/edit/${taskId}`, updatedTask).subscribe(
      () => {
        if (titleValue !== null && titleValue !== undefined) {
          this.editTodo.title = titleValue;
        }
        if (descriptionValue !== null && descriptionValue !== undefined) {
          this.editTodo.description = descriptionValue;
        }
        console.log(`Task with ID ${taskId} updated successfully.`);
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.error('Error updating task:', error);
      }
    );
  }
  
}

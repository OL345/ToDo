import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { termin } from '../interfaces/termin';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() editTodo!: termin;

  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private http: HttpClient, private router: Router) {}

  editTask(): void {
    if (!this.editTodo) {
      console.error('editTodo is undefined');
      return;
    }

    const titleValue = this.taskForm.get('title')?.value as string;
    const descriptionValue = this.taskForm.get('description')?.value as string;

    const updatedTask: termin = {
      id: this.editTodo.id,
      title: titleValue,
      description: descriptionValue,
      done: false
    };
    
    console.log(this.editTodo.id);

    this.http.put(`api/edit/${this.editTodo.id}`, updatedTask)
      .subscribe(
        () => {
          console.log(`Task with ID ${this.editTodo.id} updated successfully.`);
          this.router.navigateByUrl('/');
        },
        (error) => {
          console.error('Error updating task:', error);
        }
      );
  }
}

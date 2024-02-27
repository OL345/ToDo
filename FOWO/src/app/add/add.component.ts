import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { termin } from '../interfaces/termin';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newTodo: termin = { id: 0, title: '', description: '', done: false };

  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private httpClient: HttpClient, private router: Router) {}

  addTodo() {
    const titleValue = this.taskForm.value.title as string; // Explicitly cast to string
    const descriptionValue = this.taskForm.value.description as string; // Explicitly cast to string
  
    if (titleValue !== null && titleValue !== undefined) {
      this.newTodo.title = titleValue;
    }
    if (descriptionValue !== null && descriptionValue !== undefined) {
      this.newTodo.description = descriptionValue;
    }
    
    this.httpClient.post<any>('http://localhost:3000/add-todo', this.newTodo).subscribe(
      (response) => {
        console.log('New Todo added successfully!', response);
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.error('Error adding Todo:', error);
      }
    );
  }
}

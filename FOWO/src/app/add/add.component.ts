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
  newTodo: termin = { id: 0, title: '', description: '' };

  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private httpClient: HttpClient, private router: Router) {}

  addTodo() {
    // Get values from the form
    const titleValue = this.taskForm.value.title as string; // Explicitly cast to string
    const descriptionValue = this.taskForm.value.description as string; // Explicitly cast to string
  
    // Ensure the values are not null or undefined before assigning
    if (titleValue !== null && titleValue !== undefined) {
      this.newTodo.title = titleValue;
    }
    if (descriptionValue !== null && descriptionValue !== undefined) {
      this.newTodo.description = descriptionValue;
    }
  
    // Make a POST request to add a new todo
    this.httpClient.post<any>('http://localhost:3000/add-todo', this.newTodo).subscribe(
      (response) => {
        console.log('New Todo added successfully!', response);
        // Redirect to the home page after successful addition
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.error('Error adding Todo:', error);
      }
    );
  }
}

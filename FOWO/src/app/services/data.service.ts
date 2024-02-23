import { Injectable } from '@angular/core';
import { termin } from '../interfaces/termin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  _tasks: termin[] = [];

  constructor(private httpClient: HttpClient) {
    //this.fetchData();
  }

  public fetchData2(): Observable<termin[]> {
    return this.httpClient.get<termin[]>('http://localhost:3000/tasks')
  }

  fetchData() {
    fetch('http://localhost:3000/tasks')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: termin[]) => {
        console.log('Data received:', data);
        this._tasks = data;
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }

  getData(): termin[] {
    return this._tasks;
  }

  addCourse(course: termin) {
    this._tasks.push(course);
  }

  deleteTask(taskId: number): Observable<any> {
    const url = `http://localhost:3000/delete-todo/${taskId}`; // Adjust the URL as needed
    return this.httpClient.delete(url);
  }
  
}
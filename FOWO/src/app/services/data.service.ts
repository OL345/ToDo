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
    return this.httpClient.get<termin[]>('api/tasks')
  }

  getData(): termin[] {
    return this._tasks;
  }

  addCourse(course: termin) {
    this._tasks.push(course);
  }

  deleteTask(taskId: number): Observable<any> {
    const url = `api/delete-todo/${taskId}`;
    return this.httpClient.delete(url);
  }
  
}
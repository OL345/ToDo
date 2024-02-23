
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TasksService {
  private readonly tasksFilePath = path.resolve(__dirname, 'tasks.json');
  private tasks = [];

  constructor() {
    this.tasks = JSON.parse(fs.readFileSync(this.tasksFilePath, 'utf8'));
  }

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find(task => task.id === id);
  }
}

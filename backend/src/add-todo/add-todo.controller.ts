import { Controller, Post, Body, Res } from '@nestjs/common';
import { termin } from '../termin/termin.interface';
import * as fs from 'fs';

@Controller('add-todo')
export class AddTodoController {

  private readonly tasksFilePath = 'tasks.json';

  @Post()
  addTask(@Body() newTask: termin, @Res() response): void {
    try {
      let tasks: termin[] = [];
      if (fs.existsSync(this.tasksFilePath)) {
        tasks = JSON.parse(fs.readFileSync(this.tasksFilePath, 'utf8'));
      }
      newTask.id = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
      tasks.push(newTask);
      fs.writeFileSync(this.tasksFilePath, JSON.stringify(tasks, null, 2), 'utf8');

      
      response.status(201).send('Task added successfully');
    } catch (error) {
      console.error('Error adding task:', error);
      response.status(500).send('Internal Server Error');
    }
  }
}

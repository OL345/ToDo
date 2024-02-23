import { Controller, Post, Body, Res, Put, Param, NotFoundException } from '@nestjs/common';
import { termin } from '../termin/termin.interface';
import * as fs from 'fs'

@Controller('tasks')
export class EditController {
  constructor() {}

  private readonly tasksFilePath = 'tasks.json';

  @Put(':id')
  editTask(@Param('id') taskId: string, @Body() updatedTask: Partial<termin>, @Res() response): void {
    try {
      let tasks: termin[] = [];
      if (fs.existsSync(this.tasksFilePath)) {
        tasks = JSON.parse(fs.readFileSync(this.tasksFilePath, 'utf8'));
      }
      const taskIndex = tasks.findIndex(task => task.id === Number(taskId));
      if (taskIndex === -1) {
        throw new NotFoundException(`Task with ID ${taskId} not found`);
      }
      tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
      fs.writeFileSync(this.tasksFilePath, JSON.stringify(tasks, null, 2), 'utf8');
      response.status(200).send('Task edited successfully');
    } catch (error) {
      console.error('Error editing task:', error);
      if (error instanceof NotFoundException) {
        response.status(404).send(error.message);
      } else {
        response.status(500).send('Internal Server Error');
      }
    }
  }
}

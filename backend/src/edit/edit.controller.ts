import { Controller, Put, Param, Body, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { termin } from '../termin/termin.interface';
import * as fs from 'fs';

@Controller('edit')
export class EditController {
  constructor() {}

  private readonly tasksFilePath = 'tasks.json';

  @Put(':id')
  editTask(@Param('id') taskId: string, @Body() updatedTask: Partial<termin>): void {
    try {
      let tasks: termin[] = [];
      if (fs.existsSync(this.tasksFilePath)) {
        tasks = JSON.parse(fs.readFileSync(this.tasksFilePath, 'utf8'));
      }

      console.log(tasks);

      const taskIndex = tasks.findIndex(task => task.id == Number(taskId));

      console.log(taskIndex)
      if (taskIndex == -1) {
        throw new NotFoundException(`Task with ID ${taskId} not found`);
      }


      tasks[taskIndex].title = updatedTask.title;
      tasks[taskIndex].description = updatedTask.description;

      fs.writeFileSync(this.tasksFilePath, JSON.stringify(tasks, null, 2), 'utf8');
    } catch (error) {
      console.error('Error editing task:', error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}

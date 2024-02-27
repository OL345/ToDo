import { Controller, Delete, Param, HttpStatus, NotFoundException, Res } from '@nestjs/common';
import * as fs from 'fs';

@Controller('delete-todo')
export class DeleteTodoController {
  private readonly tasksFilePath = 'tasks.json';

  @Delete(':id')
  deleteTask(@Param('id') taskId: number, @Res() response): void {
    try {
      let tasks: any[] = [];
      if (fs.existsSync(this.tasksFilePath)) {
        tasks = JSON.parse(fs.readFileSync(this.tasksFilePath, 'utf8'));
      }

      const taskIndex = tasks.findIndex(task => task.id == taskId);
      if (taskIndex == -1) {
        throw new NotFoundException('Task not found');
      }

      tasks.splice(taskIndex, 1);
      fs.writeFileSync(this.tasksFilePath, JSON.stringify(tasks, null, 2), 'utf8');

      response.status(HttpStatus.OK).send({message: 'Task deleted successfully'});
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).send(error.message);
      } else {
        console.error('Error deleting task:', error);
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Internal Server Error');
      }
    }
  }
}

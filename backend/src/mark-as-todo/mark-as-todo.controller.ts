import { Controller, Put, Param, Body, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { termin } from '../termin/termin.interface';
import * as fs from 'fs';

@Controller('mark-as-todo')
export class MarkAsTodoController {
    private readonly tasksFilePath = 'tasks.json';
  
    @Put(':id')
    markTaskAsDone(@Param('id') taskId: number): void {
        try {
            let tasks: termin[] = [];
            if (fs.existsSync(this.tasksFilePath)) {
                tasks = JSON.parse(fs.readFileSync(this.tasksFilePath, 'utf8'));
            }

            const task = tasks.find(task => task.id === Number(taskId));
            if (!task) {
                throw new NotFoundException(`Task with ID ${taskId} not found`);
            }

            task.done = false; // Mark the task as done

            fs.writeFileSync(this.tasksFilePath, JSON.stringify(tasks, null, 2), 'utf8');
        } catch (error) {
            console.error('Error marking task as todo:', error);
            throw new InternalServerErrorException('Internal Server Error');
        }
    }
}

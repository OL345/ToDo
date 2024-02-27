import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { AddTodoController } from './add-todo/add-todo.controller';
import { DeleteTodoController } from './delete-task/delete-task.controller';
import { EditController } from './edit/edit.controller';
import { MarkAsDoneController } from './mark-as-done/mark-as-done.controller';

@Module({
  imports: [],
  controllers: [AppController, TasksController, AddTodoController, DeleteTodoController, EditController, MarkAsDoneController],
  providers: [AppService],
})
export class AppModule {}

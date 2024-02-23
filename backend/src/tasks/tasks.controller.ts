import { Controller, Get, Post, Body } from '@nestjs/common';
import { termin } from '../termin/termin.interface';
import * as fs from 'fs';

@Controller('tasks')
export class TasksController {
  private tasks: any[];

  constructor() {
    this.tasks = JSON.parse(fs.readFileSync('./tasks.json', 'utf-8'));
  }

  @Get()
  getTasks(): any[] { 

    this.tasks = JSON.parse(fs.readFileSync('./tasks.json', 'utf-8'));
    return this.tasks;
  }
}


 
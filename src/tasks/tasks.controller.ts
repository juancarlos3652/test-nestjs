import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service'
import {CreateTaskDto} from './task.dto'

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService){}

  @Get()
  getAllTasks(){
    return this.tasksService.getAllTasks()
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto){
    this.tasksService.createTask(newTask.title, newTask.description)
  } e
}

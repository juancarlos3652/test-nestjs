import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [{
    id: 'i',
    title: 'first title',
    description: 'some task',
    status: TaskStatus.PENDING,
  }]

  getAllTasks(){
    return this.tasks;
  }

  createTask(title: string, description: string){
    const task: Task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    }

    this.tasks.push(task);
    return task;
  }
  
  updateTask(){}
  
  deleteTask(){}
}

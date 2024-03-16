import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAllTasks(){
    return [{id: "i", title: 'first task', description: 'some tasks'}]
  }

  createtask(){}
  
  updateTask(){}
  
  deleteTask(){}
}

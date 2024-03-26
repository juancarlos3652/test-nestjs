import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { UpdateFieldsDto } from './task.dto';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 'i',
      title: 'first title',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks(title?: string): Task[] {
    if (title)
      return this.tasks.filter((task) =>
        task.title.toLowerCase().includes(title.toLowerCase()),
      );
    return this.tasks;
  }

  getTasksByTitle(title: string): Task[] {
    return this.getAllTasks(title);
  }

  createTask(title: string, description: string) {
    const task: Task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updateFields: UpdateFieldsDto): Task {
    const currentTask = this.getTaskById(id);
    const newTask = Object.assign(currentTask, updateFields);
    this.tasks = this.tasks.map((task) =>
      task.id === id ? newTask : currentTask,
    );
    return newTask;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

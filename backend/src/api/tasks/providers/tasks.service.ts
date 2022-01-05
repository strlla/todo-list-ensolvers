import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { CreateTaskDTO } from '../dto/create-task.dto';
import { UpdateTaskDTO } from '../dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async createOne(createTaskDTO: CreateTaskDTO) {
    console.log(createTaskDTO)
    const post = this.taskRepository.create(createTaskDTO);
    console.log("post")
    console.log(post)
    return await this.taskRepository.save(post)
  }

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOne(id: string) {
    return this.taskRepository.findOne(id);
  }

  async update(id: string, updateTodoDTO: UpdateTaskDTO) {
    return await this.taskRepository.update(id, updateTodoDTO);
  }

  async remove(id: string) {
    return await this.taskRepository.delete(id);
  }
}

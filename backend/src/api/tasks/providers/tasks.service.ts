import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { CreateTaskDTO, UpdateTaskDTO, UpdateTaskStatusDTO } from '../dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async createOne(createTaskDTO: CreateTaskDTO) {
    const post = this.taskRepository.create(createTaskDTO);
    return await this.taskRepository.save(post);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOne(id: string) {
    return this.taskRepository.findOne(id);
  }

  async updateStatus(id: string, updateTaskStatusDTO: UpdateTaskStatusDTO) {
    return await this.taskRepository.update(id, updateTaskStatusDTO);
  }

  async updateText(id: string, updateTaskDTO: UpdateTaskDTO) {
    return await this.taskRepository.update(id, updateTaskDTO);
  }

  async remove(id: string) {
    return await this.taskRepository.delete(id);
  }
}

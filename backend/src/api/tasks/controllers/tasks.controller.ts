import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from '../providers/tasks.service';
import { CreateTaskDTO, UpdateTaskDTO, UpdateTaskStatusDTO } from '../dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDTO: CreateTaskDTO) {
    const data = await this.tasksService.createOne(createTaskDTO);
    return { message: 'Task created', data };
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    let data = await this.tasksService.remove(id);

    return { message: 'Task deleted', data };
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  async updateStatus(
    @Param('id') id: string,
    @Body() updateTaskDTO: UpdateTaskStatusDTO,
  ) {
    let data = await this.tasksService.updateStatus(id, updateTaskDTO);
    return { message: 'Task updated', data };
  }

  @Patch(':id')
  async updateText(
    @Param(':id') id: string,
    @Body() updateTaskDTO: UpdateTaskDTO,
  ) {
    let data = await this.tasksService.updateText(id, updateTaskDTO);
    return { message: 'Task updated', data };
  }
}

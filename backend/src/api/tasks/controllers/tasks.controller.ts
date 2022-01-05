import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
} from '@nestjs/common';
import { TasksService } from '../providers/tasks.service';
import { CreateTaskDTO } from '../dto/create-task.dto';
import { UpdateTaskDTO } from '../dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDTO: CreateTaskDTO) {
    console.log(createTaskDTO)
    const data = await this.tasksService.createOne(createTaskDTO);
    return { message: 'Task created', data };
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
  update(@Param('id') id: string, @Body() updateTaskDTO: UpdateTaskDTO) {
    return this.tasksService.update(id, updateTaskDTO);
  }
}

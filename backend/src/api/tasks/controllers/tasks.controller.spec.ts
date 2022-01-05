import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from '../providers/tasks.service';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('to be defined', () => {
    expect(controller).toBeDefined();
  });
});
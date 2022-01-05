import { Test, TestingModule } from '@nestjs/testing';
import { FoldersController } from './folders.controller';
import { FoldersService } from '../providers/folders.service';

describe('FoldersController', () => {
  let controller: FoldersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoldersController],
      providers: [FoldersService],
    }).compile();

    controller = module.get<FoldersController>(FoldersController);
  });

  it('to be defined', () => {
    expect(controller).toBeDefined();
  });
});

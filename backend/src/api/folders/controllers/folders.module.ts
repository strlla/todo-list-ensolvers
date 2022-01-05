import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FoldersService } from '../providers/folders.service';
import { FoldersController } from './folders.controller';
import { Folder } from '../entities/folder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Folder])],
  controllers: [FoldersController],
  providers: [FoldersService]
})
export class FoldersModule {}
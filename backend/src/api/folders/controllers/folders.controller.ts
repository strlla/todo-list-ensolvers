import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FoldersService } from '../providers/folders.service';
import { CreateFolderDTO } from '../dto/create-folder.dto';
import { UpdateFolderDTO } from '../dto/update-folder.dto';

@Controller('folders')
export class FoldersController {
  constructor(private readonly foldersService: FoldersService) {}

  @Post()
  create(@Body() createFolderDto: CreateFolderDTO) {
    return this.foldersService.create(createFolderDto);
  }

  @Get()
  findAll() {
    return this.foldersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foldersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFolderDto: UpdateFolderDTO) {
    return this.foldersService.update(id, updateFolderDto);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    let data = await this.foldersService.remove(id);
    //delete all tasks attached
    
    return { message: 'Folder deleted', data };
  }
}

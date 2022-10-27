import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService, storage1 } from './app.service';
import { InsertFileDto } from './dto/insert.file.dto';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'attachment', maxCount: 4 }], storage1),
  )
  @Post('/insert_file')
  async insertFile(
    @Res() res: Response,
    @UploadedFiles() files,
    @Query() reqQuery,
    @Body() body: InsertFileDto,
  ) {
    try {
      return res.status(HttpStatus.OK);
    } catch (error) {
      throw error;
    }
  }
}

import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Logger,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService } from './app.service';
import { InsertFileDto } from './dto/insert.file.dto';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiConsumes('multipart/form-data')
  @Post('upload')
  @UseInterceptors(FileInterceptor('attachment'))
  async generateFile(
    @UploadedFile() file: any,
    @Res() res: Response,
    @Body() body: InsertFileDto,
  ) {
    try {
      if (!file.originalname.endsWith('.txt')) {
        throw new BadRequestException('extension is not continue .txt ');
      }
      return res.sendStatus(HttpStatus.ACCEPTED);
    } catch (error) {
      throw error;
    }
  }
}

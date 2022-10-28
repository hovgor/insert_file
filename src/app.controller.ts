import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService } from './app.service';
import { InsertFileDto } from './dto/insert.file.dto';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiConsumes('multipart/form-data')
  @Post('upload')
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description:
      'You have to click on "Try it out" then "Add string item" add an attachment at the end of the knife "Execute".',
  })
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

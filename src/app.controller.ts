import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  NotFoundException,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService } from './app.service';
import { DeviceInfoDto } from './dto/device.info.dto';
// import { InsertFileDto } from './dto/insert.file.dto';

@ApiTags('add_file_for_testing')
@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @ApiConsumes('multipart/form-data')
  @Post('upload')
  // @ApiResponse({
  //   status: HttpStatus.ACCEPTED,
  //   description:
  //     'You have to click on "Try it out" then "Add string item" add an attachment at the end of the knife "Execute".',
  // })
  // @UseInterceptors(FileInterceptor('attachment'))
  async generateFile(
    @UploadedFile() file: any,
    @Res() res: Response,
    // @Body() body: InsertFileDto,
    @Req() req: any,
  ) {
    try {
      if (!req['headers']['content-type']) {
        throw new NotFoundException('Content is empoty!!!', 'Insert a file!!!');
      }
      const ext = req['headers']['content-type'].split('/');

      if (ext[0] !== 'text') {
        throw new BadRequestException('It is not a text format!!!');
      }
      return res.status(HttpStatus.ACCEPTED).json({
        success: true,
        message: `This is ${ext[1]} ${ext[0]} format.`,
      });
    } catch (error) {
      throw error;
    }
  }

  @Post('deviceInfo')
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'You have to click on "Try it out" then',
  })
  async deviceInfo(@Res() res: Response, @Body() body: DeviceInfoDto) {
    try {
      if (
        body.currentTime &&
        body.deviceModel &&
        body.deviceOSVersion &&
        body.ipAddress &&
        body.timeZone &&
        body.wifiName
      ) {
        return res.status(HttpStatus.ACCEPTED).json({
          data: body,
          success: true,
          message: 'all is filds is added.',
        });
      } else {
        throw new BadRequestException('Something went wrong');
      }
    } catch (error) {
      throw error;
    }
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';

export const storage1 = {
  storage: diskStorage({
    destination: `./upload-file/iserting`,
    filename: async (req, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;
      if (extension !== 'txt') {
        throw new BadRequestException('extension is not txt');
      }
      cb(null, `${filename}${extension}`);
    },
  }),
};
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

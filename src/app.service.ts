import { Injectable } from '@nestjs/common';
// import * as path from 'path';
// import { v4 as uuidv4 } from 'uuid';
// import { diskStorage } from 'multer';
// import { InsertFileDto } from './dto/insert.file.dto';

// export const storage1 = {
//   storage: diskStorage({
//     destination: `./upload-file/iserting`,
//     filename: async (req, file, cb) => {
//       const filename: string =
//         path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
//       const extension: string = path.parse(file.originalname).ext;
//       if (extension !== '.txt') {
//         return cb(null, '');
//       } else {
//         cb(null, `${filename}${extension}`);
//       }
//     },
//   }),
// };
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // async insertFile(file: any, data: InsertFileDto) {
  //   try {
  //     return 'ok';
  //   } catch (error) {
  //     Logger.log('Insert file function');
  //     throw error;
  //   }
  // }
}

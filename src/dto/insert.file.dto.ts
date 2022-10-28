import { ApiProperty } from '@nestjs/swagger';

export class InsertFileDto {
  @ApiProperty({ format: 'binary' })
  attachment?: any[];
}

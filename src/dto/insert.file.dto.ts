import { ApiPropertyOptional } from '@nestjs/swagger';

export class InsertFileDto {
  @ApiPropertyOptional({ required: false, format: 'binary' })
  attachment?: any[];
}

import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class DeviceInfoDto {
  @ApiProperty()
  @IsDate()
  timeZone: Date;

  @ApiProperty()
  @IsString()
  ipAddress: string;

  @ApiProperty()
  @IsString()
  wifiName: string;

  @ApiProperty()
  @IsString()
  currentTime: string;

  @ApiProperty()
  @IsString()
  deviceOSVersion: string;

  @ApiProperty()
  @IsString()
  deviceModel: string;
}

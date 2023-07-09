import { Module } from '@nestjs/common';
import { QrhistoricService } from './qrhistoric.service';
import { QrhistoricController } from './qrhistoric.controller';

@Module({
  controllers: [QrhistoricController],
  providers: [QrhistoricService]
})
export class QrhistoricModule {}

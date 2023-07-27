import { Module } from '@nestjs/common';
import { QrhistoricService } from './qrhistoric.service';
import { QrhistoricController } from './qrhistoric.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Qrhistoric } from './entities/qrhistoric.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Qrhistoric]),
            ],
  controllers: [QrhistoricController],
  providers: [QrhistoricService]
})
export class QrhistoricModule {}

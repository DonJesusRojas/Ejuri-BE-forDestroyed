import { Test, TestingModule } from '@nestjs/testing';
import { QrhistoricController } from './qrhistoric.controller';
import { QrhistoricService } from './qrhistoric.service';

describe('QrhistoricController', () => {
  let controller: QrhistoricController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QrhistoricController],
      providers: [QrhistoricService],
    }).compile();

    controller = module.get<QrhistoricController>(QrhistoricController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

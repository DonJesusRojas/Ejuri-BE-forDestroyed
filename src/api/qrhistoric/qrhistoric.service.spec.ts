import { Test, TestingModule } from '@nestjs/testing';
import { QrhistoricService } from './qrhistoric.service';

describe('QrhistoricService', () => {
  let service: QrhistoricService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QrhistoricService],
    }).compile();

    service = module.get<QrhistoricService>(QrhistoricService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

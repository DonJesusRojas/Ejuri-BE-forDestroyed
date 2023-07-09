import { PartialType } from '@nestjs/mapped-types';
import { CreateQrhistoricDto } from './create-qrhistoric.dto';

export class UpdateQrhistoricDto extends PartialType(CreateQrhistoricDto) {}

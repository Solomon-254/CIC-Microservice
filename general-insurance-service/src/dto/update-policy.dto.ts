import { PartialType } from '@nestjs/mapped-types';
import { PolicyDto } from './create-policy.dto';

export class UpdatePolicyDto extends PartialType(PolicyDto) {}

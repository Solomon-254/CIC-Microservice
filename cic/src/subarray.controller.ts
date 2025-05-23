import { Controller, Get, Query } from '@nestjs/common';
import { SubarrayService } from './subarray.service';

@Controller('subarray')
export class SubarrayController {
  constructor(private readonly subarrayService: SubarrayService) {}

  @Get('max-sum')
  getMaxSubarray(@Query('arr') arrStr: string) {
    const arr = arrStr.split(',').map(Number); //splits the arr into a string or array and casts to a number
    console.log(arr)
    return this.subarrayService.findMaxSubarray(arr);
  }
} 
 
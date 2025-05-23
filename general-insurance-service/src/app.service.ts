import { Injectable, OnModuleInit, NotFoundException  } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Policy } from './entities/policy.entity';
import { PolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';

@Injectable()
export class AppService implements OnModuleInit {
 constructor(
    private httpService: HttpService,
    @InjectRepository(Policy)
    private readonly policyRepository: Repository<Policy>,
  ) {}

  async onModuleInit() {
    const instance = {
    serviceName: 'general-insurance',
url: 'http://localhost:3002',

    };
    try {
      const response = await lastValueFrom(
        this.httpService.post('http://localhost:3000/register', instance),
      );
      console.log('Registered:', response.data);
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  }



  //gi crud functions
   async createPolicy(data: PolicyDto): Promise<Policy> {
    const policy = this.policyRepository.create(data);
    return this.policyRepository.save(policy);
  }

  async findAllPolicies(): Promise<Policy[]> {
    return this.policyRepository.find();
  }

  async findPolicyById(id: number): Promise<Policy> {
    const policy = await this.policyRepository.findOne({ where: { id } });
    if (!policy) throw new NotFoundException('Policy not found');
    return policy;
  }

  async updatePolicy(id: number, data: UpdatePolicyDto): Promise<Policy> {
    const policy = await this.findPolicyById(id);
    Object.assign(policy, data);
    return this.policyRepository.save(policy);
  }

  async deletePolicy(id: number): Promise<void> {
    const result = await this.policyRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Policy not found');
    }
  }

}

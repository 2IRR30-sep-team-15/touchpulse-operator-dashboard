import { Injectable } from '@nestjs/common';

@Injectable()
export class CommunicationService {
  getToken() {
    return 'test-token';
  }
}

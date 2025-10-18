import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/interfaces/User';

@Injectable()
export class TouchpulseService {
  private baseUrl: string;
  private urlMapping: Record<string, any>;

  constructor(
    private config: ConfigService,
    private httpService: HttpService,
  ) {
    this.baseUrl = config.get<string>(
      'TOUCHPULSE_API_URL',
      'http://localhost:3000',
    );

    this.urlMapping = {
      auth: {
        login: this.baseUrl + '/auth/login',
        logout: this.baseUrl + '/auth/logout',
      },
      users: this.baseUrl + '/users',
    };
  }

  login() {
    const username = this.config.get<string>('TOUCHPULSE_USERNAME', '');
    const password = this.config.get<string>('TOUCHPULSE_PASSWORD', '');
    const params = { username, password };

    this.httpService.post(this.urlMapping.auth.login as string, { params });
  }

  logout() {
    this.httpService.post(this.urlMapping.auth.logout as string);
  }

  async getUsers(): Promise<User[]> {
    // TODO: relogin if token has expired

    const response = await firstValueFrom(
      this.httpService.get(this.urlMapping.users as string),
    );

    return response.data;
  }
}

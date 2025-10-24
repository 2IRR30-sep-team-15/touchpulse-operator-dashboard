import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AccessToken } from 'livekit-server-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CommunicationService {
  private apiKey: string;
  private apiSecret: string;

  constructor(private configService: ConfigService) {
    const key = this.configService.get<string>('LIVEKIT_API_KEY');
    const secret = this.configService.get<string>('LIVEKIT_API_SECRET');
    if (!key || !secret) {
      throw new InternalServerErrorException(
        'LiveKit API key/secret not configured',
      );
    }
    this.apiKey = key;
    this.apiSecret = secret;
  }

  getToken(roomName: string, participantName: string) {
    const at = new AccessToken(this.apiKey, this.apiSecret, {
      identity: participantName,
      ttl: '10m',
    });
    at.addGrant({
      roomJoin: true,
      canPublish: true,
      canSubscribe: true,
      room: roomName,
    });
    return at.toJwt();
  }
}

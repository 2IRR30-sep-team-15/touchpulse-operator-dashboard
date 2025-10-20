import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AccessToken } from 'livekit-server-sdk';

@Injectable()
export class CommunicationService {
  private apiKey: string;
  private apiSecret: string;

  constructor() {
    if (!process.env.LIVEKIT_API_KEY || !process.env.LIVEVKIT_API_SECRET) {
      throw new InternalServerErrorException(
        'LiveKit API key/secret not configured',
      );
    }
    this.apiKey = process.env.LIVEKIT_API_KEY;
    this.apiSecret = process.env.LIVEVKIT_API_SECRET;
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

import { Detail } from './detail';
import { Chat } from './chat';
import { Location } from './location';

export interface Profile {
  name?: string;
  username?: string;
  image?: string;
  details?: Detail;
  chats?: Chat[];
  locations?: Location[];

  id: string;
  email: string;
  provider: 'google' | 'apple';
  sessions: string[];
  created_at: number;
}

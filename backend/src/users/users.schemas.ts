import { Entity, Schema } from 'redis-om';

export interface User extends Entity {
  id: string;
  email: string;
  provider: 'google' | 'apple';
  sessions: string[];
  created_at: number;
}

export const userSchema = new Schema<User>(
  'user',
  {
    id: {
      type: 'string',
    },
    email: {
      type: 'text',
    },
    provider: {
      type: 'string',
    },
    sessions: {
      type: 'string[]',
    },
    created_at: {
      type: 'date',
    },
  },
  { dataStructure: 'JSON' },
);

import { Schema } from 'redis-om';
import { User } from 'src/interfaces/User';

export const userSchema = new Schema<User>(
  'user',
  {
    id: {
      type: 'string',
    },
    nickname: {
      type: 'text',
      path: '$.settings.nickname',
    },
  },
  { dataStructure: 'JSON' },
);

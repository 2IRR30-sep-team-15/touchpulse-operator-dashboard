interface User {
  id: string;
  email: string;
  provider: 'google' | 'apple';
  sessions: string[];
  created_at: number;
}

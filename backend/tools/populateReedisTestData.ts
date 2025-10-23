import { Client } from 'redis-om';
import { userSchema } from '../src/users/users.schemas';

async function populateTestUsers() {
  const client = new Client();
  await client.open('redis://:yourpassword@localhost:6379');
  const repository = client.fetchRepository(userSchema);
  await repository.createIndex();

  const testUserData = [
    {
      id: 'user-1',
      email: 'alice@example.com',
      provider: 'google',
      sessions: ['session-1', 'session-2'],
      created_at: new Date('2025-01-01T12:00:00Z'),
    },
    {
      id: 'user-2',
      email: 'bob@example.com',
      provider: 'apple',
      sessions: ['session-3'],
      created_at: new Date('2025-02-15T08:30:00Z'),
    },
    {
      id: 'user-3',
      email: 'carol@example.com',
      provider: 'google',
      sessions: [],
      created_at: new Date(),
    },
  ];

  for (const userData of testUserData) {
    // const user = repository.createEntity(userData);
    // router.put('/', async (req, res) => {
    //   const user = await repository.createAndSave(req.body);
    //   res.send
    // });
    await repository.save(userData as any);
  }

  await client.close();
  console.log('Redis test users populated successfully.');
}

populateTestUsers().catch(console.error);

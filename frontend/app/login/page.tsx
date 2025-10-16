'use client';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const users = [
    { username: 'user1', password: 'pass123' },
    { username: 'user2', password: 'abc456' },
    { username: 'admin', password: 'admin' },
  ];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const matchedUser = users.find(
      (user) => user.username === username && user.password === password,
    );
    if (matchedUser) {
      router.push('../dashboard');
    } else {
      alert('Invalid username or password.');
    }
  };

  const passwordRef = useRef<HTMLInputElement>(null);
  const handleUserEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      passwordRef.current?.focus();
    }
  };

  const handlePasswordEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLogin();
    }
  };

  return (
    <div className="w-screen h-screen flex">
      {/* Left dark side */}
      <div className="flex-1" style={{ backgroundColor: '#0d1e2e' }}></div>
      {/* Right login form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md text-left text-gray-900">
          <h2 className="text-2xl font-bold">Login</h2>
          <p className="mb-4 text-gray-600">
            Enter your details below to login
          </p>

          {/* Username text box */}
          {/* <p className="font-bold">
            Username
          </p> */}
          <div className="mb-4">
            <input
              type="text"
              required
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleUserEnter}
              className="w-full px-4 py-2 border rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password text box */}
          {/* <p className="font-bold">
            Password
          </p> */}
          <div className="mb-4">
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
              onKeyDown={handlePasswordEnter}
              className="w-full px-4 py-2 border rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Login button */}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-[#ffb100] text-white rounded-lg transition-colors duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

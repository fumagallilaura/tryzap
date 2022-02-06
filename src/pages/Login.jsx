import React, { useState } from 'react';
import { loginUserAPI } from '../services/API';

export default function Login() {
  const [username, setUsername] = useState('');
  return (
    <main>
      <form>
        <label htmlFor="username">
          Username
          <input
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            loginUserAPI(username, 1234567);
          }}
        >
          Logar
        </button>
      </form>
    </main>
  )
};

import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
  return (
    <div>
      <Link to="/dashboard">
        <button>Login</button>
      </Link>
    </div>
  );
}

import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { AiOutlineGoogle, AiFillGithub } from 'react-icons/ai';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false, // Handle redirection manually
      email,
      password,
    });
    if (result.error) {
      console.error('Login error:', result.error);
      // Handle login errors (display error message)
    } else {
      router.push('/ (your home page route)'); // Redirect to home page
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <button onClick={() => signIn('google')}>
          <AiOutlineGoogle /> Login with Google
        </button>
        <button onClick={() => signIn('github')}>
          <AiFillGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;

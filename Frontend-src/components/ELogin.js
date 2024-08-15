import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './Dashboad/context/AuthContext';
import logo from './images/logo.png';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PrimarySearchAppBar from './Dashboad/Header.js';
import './Dashboad/e-log.css';
import axios from 'axios';
import { useUser } from './Dashboad/UserContext';

export default function Login() {
  const { login } = useAuth();
  const { setUser } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const base64UrlDecode = (base64Url) => {
    base64Url = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const base64 = atob(base64Url);
    try {
      return decodeURIComponent(
        base64
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
    } catch (err) {
      return base64;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    if (email === "" || password === "") {
      setError("Email and password are required.");
      return;
    }
    
    try {
      const res = await axios.post("http://localhost:8000/security/authenticate", { email, password });
      const token = res.data.access_token;
      console.log('Token:', token);

      localStorage.setItem("token", token);
      setUser(token);

      const [header, payload] = token.split('.');
      const decodedHeader = base64UrlDecode(header);
      const decodedPayload = base64UrlDecode(payload);
      const payloadObject = JSON.parse(decodedPayload);
      const headerObject = JSON.parse(decodedHeader);

      localStorage.setItem('Header', JSON.stringify(headerObject));
      localStorage.setItem('Payload', JSON.stringify(payloadObject));

      login(); // Set the authenticated state
      navigate('/home');
    } catch (err) {
      console.log('Error:', err);
      setError("An error occurred during sign in.");
    }
  };

  return (
    <div>
      <PrimarySearchAppBar />
      <div className="logincontainer">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: '100%',
              maxWidth: '900px',
              height: 'auto',
            },
          }}
        >
          <Paper elevation={3} className="sectioncontainer">
            <div className="login-content">
              <section className="logo-section">
                <img src={logo} alt="" className="logo" />
              </section>

              <section className="section2log">
                <div className="dom">
                  <h1 className="login-title">LOGIN</h1>
                  {error && <p className="error-message">{error}</p>}
                  <FormControl sx={{ m: 1, width: '25ch', marginTop: '2vh' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-email" style={{ fontFamily: "'Ubuntu', sans-serif" }}>Email</InputLabel>
                    <Input
                      id="standard-adornment-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{ fontFamily: "'Ubuntu', sans-serif" }}
                    />
                  </FormControl>

                  <FormControl sx={{ m: 1, width: '25ch', marginTop: '2vh' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password" style={{ fontFamily: "'Ubuntu', sans-serif" }}>Password</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      style={{ fontFamily: "'Ubuntu', sans-serif" }}
                    />
                  </FormControl>

                  <p className="register-link">
                    New user? <Link to='/reg' className="rstyle">Register</Link>
                  </p>

                  <Stack direction="row" spacing={1} className="signin-button-container">
                    <Button variant="contained" onClick={handleLogin} style={{ fontFamily: "'Ubuntu', sans-serif", backgroundColor: 'black' }}>
                      Sign In
                    </Button>
                  </Stack>
                </div>
              </section>
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
}

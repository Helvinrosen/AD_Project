import React, { useState } from 'react';
import Box from '@mui/material/Box';
import PrimarySearchAppBar from './Dashboad/Header';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Dashboad/Reg.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmpassword: '',
    role: 'MEMBER'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmpassword) {
      setError('Passwords do not match');
      return;
    }

    // Prepare data to be sent to the backend, excluding confirmpassword
    const { confirmpassword, ...userToRegister } = formData;

    try {
      const res = await axios.post("http://localhost:8000/security/register", userToRegister);

      if (res.status === 200) {
        alert("Registration successful");
        navigate("/");
      } else {
        alert("Registration failed. User may already exist.");
      }
    } catch (err) {
      console.log("Error", err);
      alert("Invalid username/password or other error occurred.");
    }
  };

  return (
    <div>
      <PrimarySearchAppBar />
      <div className="registercontainer">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: { xs: '90vw', sm: '70vw', md: '50vh' },
              height: { xs: 'auto', md: '75vh' },
            },
          }}
        >
          <Paper elevation={3} className="regsectioncontainer">
            <section className="section1reg">
              <div className="domreg">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <h1 className='regstyle'>REGISTER</h1>
                </div>
                <form onSubmit={handleSubmit}>
                  {error && <p className="error-message">{error}</p>}
                  <FormControl sx={{ m: 1, width: '100%', marginTop: '2vh' }} variant="standard">
                    <InputLabel htmlFor="firstName" style={{fontFamily: "'Ubuntu', sans-serif" }}>First Name</InputLabel>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      style={{fontFamily: "'Ubuntu', sans-serif" }}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '100%', marginTop: '2vh' }} variant="standard">
                    <InputLabel htmlFor="lastName" style={{fontFamily: "'Ubuntu', sans-serif" }}>Last Name</InputLabel>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      style={{fontFamily: "'Ubuntu', sans-serif" }}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '100%', marginTop: '2vh' }} variant="standard">
                    <InputLabel htmlFor="email" style={{fontFamily: "'Ubuntu', sans-serif" }}>Email</InputLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{fontFamily: "'Ubuntu', sans-serif" }}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '100%', marginTop: '2vh' }} variant="standard">
                    <InputLabel htmlFor="password" style={{fontFamily: "'Ubuntu', sans-serif" }}>Password</InputLabel>
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
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
                      style={{fontFamily: "'Ubuntu', sans-serif" }}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '100%', marginTop: '2vh' }} variant="standard">
                    <InputLabel htmlFor="confirmpassword" style={{fontFamily: "'Ubuntu', sans-serif" }}>Confirm Password</InputLabel>
                    <Input
                      id="confirmpassword"
                      name="confirmpassword"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.confirmpassword}
                      onChange={handleChange}
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
                      style={{fontFamily: "'Ubuntu', sans-serif" }}
                    />
                  </FormControl>
                  <Stack direction="row" spacing="1vh" style={{ display: 'flex', justifyContent: 'center', paddingTop: '2vh' }}>
                    <Button variant="contained" type="submit" style={{fontFamily: "'Ubuntu', sans-serif" ,backgroundColor:'black'}}>
                      REGISTER
                    </Button>
                  </Stack>
                </form>
              </div>
            </section>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default Register;

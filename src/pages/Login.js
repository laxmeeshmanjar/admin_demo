import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  textField: {
    margin: theme.spacing(1),
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the username and password match
    if (username === 'admin' && password === 'admin') {
      //setIsLoggedIn(true);
      navigate('/home');
    } else {
      alert('Invalid username or password!');
    }
  };

 
  return (
    <Paper className={classes.root}>
      <Typography variant="h4">Login</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Username"
          className={classes.textField}
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Password"
          className={classes.textField}
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Log In
        </Button>
      </form>
    </Paper>
  );
};

export default Login;

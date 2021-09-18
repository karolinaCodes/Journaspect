import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signUpUser } from '../service.js';

const theme = createTheme();

function SignUp(){
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signUp(data.get('email'), data.get('password') , data.get('confirm_password'));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="Display_Name"
                  required
                  fullWidth
                  id="Display_Name"
                  label="Display_Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  id="confirm_password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

function signUp(email, password, confirm_password) {
  // TODO hook this up to form
   this.state = {
    input: '',
    errors: ''
  }; 
 /*    const [input, errors] = useState([
    ]); 
    */
  try {
    signUpUser(email, password, confirm_password);
  } catch(e) {
    if(e.code === 'auth/email-already-in-use') {
      // TODO display error to user, perhaps modal?
      console.warn('email already in use');
    }
  }
  
  let input = this.state.input;
  let errors = {};
  let isValid = true;

  if (!input["Display_Name"]) {
    isValid = false;
    errors["Display_Name"] = "Please enter your name.";
  }

  if (!input["email"]) {
    isValid = false;
    errors["email"] = "Please enter your email Address.";
  }

  if(!input["password"]){
    isValid = false;
    errors["password"] = "Please enter your password";
  }

  if(!input["confirm_password"]){
    isValid = false;
    errors["confirm_password"] = "Please enter your password";
  } 

  if(input[password] !== input[confirm_password]){
    isValid = false;
    errors["confirm_password"] = "Passwords do not match";
  }


  if (typeof input["email"] !== "undefined") {
      
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(input["email"])) {
      isValid = false;
      errors["email"] = "Please enter valid email address.";
    }
  }

  if(this.validate()){
    console.log(this.state);

    let input = {};
    input["Display_Name"] = "";
    input["email"] = "";
    input["password"] = "";
    this.setState({input:input});

    alert('Demo Form is submited');
}


  this.setState({
    errors: errors
  });

  return isValid;
}


export default SignUp;

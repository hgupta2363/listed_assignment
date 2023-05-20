import React, { useContext } from 'react';
import './AuthScreen.css';
import { useGoogleLogin } from '@react-oauth/google';
import { Container, Grid } from '@mui/material';
import { AuthContext } from '../../contextProvider/AuthContextProvider';
import { useHistory } from 'react-router-dom';
import appleIcon from '../../assets/appleIcon.png';
export default function AuthScreen() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      setIsLoggedIn(true);
      history.push('/');
    },
    flow: 'auth-code',
  });
  return (
    <Grid container justify='space-between'>
      <Grid xs={12} sm={12} md={5}>
        <div className='left_container_auth'>
          <p className='board_text'>Board</p>
        </div>
      </Grid>
      <Grid xs={12} sm={12} md={7}>
        <div className='overlay'>
          <div className='content_wrapper'>
            <p className='sign_in_text'>Sign In</p>
            <p className='secondary_text'>Sign in to your account</p>
            <div className='button_wrapper'>
              <div className='customBtn' onClick={() => login()}>
                <span className='icon'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'
                    style={{ width: '12px', height: '12px' }}
                  />
                </span>
                <span className='buttonText'>Sign in with Google</span>
              </div>
              <div className='customBtn'>
                <span className='icon'>
                  <img
                    src={appleIcon}
                    style={{ width: '12px', height: '12px' }}
                  />
                </span>
                <span className='buttonText'>Sign in with Apple</span>
              </div>
            </div>

            <div className='popup_card'>
              <p className='input_label_email'>Email address</p>
              <input className='input_style' />
              <p className='input_label_password'>Password</p>
              <input className='input_style' />
              <p className='forgot_password_text'>Forgot Password?</p>
              <button className='sign_in_Button'>Sign In </button>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
              }}
            >
              <p className='account_text'>
                Don't have account? <span>Register here</span>
              </p>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

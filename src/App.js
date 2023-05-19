import AuthScreen from './modules/auth/AuthScreen';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from './modules/dashboard/Dashboard';
export default function App() {
  return (
    <GoogleOAuthProvider clientId='728282040948-en3gaiktsulsvsnf7420mjbp9ctuj5if.apps.googleusercontent.com'>
      <Dashboard />
    </GoogleOAuthProvider>
  );
}

import AuthScreen from './modules/auth/AuthScreen';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from './modules/dashboard/Dashboard';
import AppRoutes from './AppRoutes';
import AuthContextProvider from './contextProvider/AuthContextProvider';
export default function App() {
  return (
    <AuthContextProvider>
      <GoogleOAuthProvider clientId='728282040948-en3gaiktsulsvsnf7420mjbp9ctuj5if.apps.googleusercontent.com'>
        <AppRoutes />
      </GoogleOAuthProvider>
    </AuthContextProvider>
  );
}

import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import Messenger from "./components/Messenger"
import AccountProvider from './context/AccountProvider';



function App() {
  const clientId = '213179434944-jjrm3k3do8v610qbu0hje0keq88hl05n.apps.googleusercontent.com';
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App;

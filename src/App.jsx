 import './App.css' 
import Header from './components/Header'
import Login from './components/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Landing from './components/Landing'
import { AuthProvider,useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import CreateOrder from './components/CreateOrder'
import JoinOrder from './components/JoinOrder'
import Profile from './components/Profile'


const AppRoutes = () => {
  // useAuth hook is used within a child of AuthProvider
  // const { token } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={  <Login />  } />
      <Route
        path="/create-order"
        element={<CreateOrder/>}
      />
      <Route
        path="/join-order"
        element=
        {<JoinOrder/>}
      />
      <Route
        path="/profile"
        element={ <Profile/>}
      />
      <Route
        path="/login"
        element={<Login/>}
      />
    </Routes>
  );
};

function App() { 

 

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <AppRoutes /> 
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App

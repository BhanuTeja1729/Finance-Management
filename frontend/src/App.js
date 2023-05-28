import React, { useState, useMemo } from 'react'
import styled from "styled-components";
import bg from './img/bg.png'

import AuthContext from "./Components/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { MainLayout } from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
// import Login from './Components/Login';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Insight from './Components/Insight';
function App() {

  const global = useGlobalContext()
  console.log(global);

  // const [isAuthenticated, isUserAuthenticated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({});

  const login = (credentials) => {
    setIsLoggedIn(true);
    setCredentials(credentials);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCredentials({});
  };


  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          credentials,
          login,
          logout,
        }}
      >
        <AppStyled bg={bg} className="App">
          {orbMemo}
          <MainLayout>
            <Navigation />
            <main>
              <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/income' element={<Income />} />
                <Route path='/expences' element={<Expenses />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/' element={<Login />} />
                <Route path="/insight" element={<Insight />} />
              </Routes>
            </main>
          </MainLayout>
        </AppStyled>
      </AuthContext.Provider>
    </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;

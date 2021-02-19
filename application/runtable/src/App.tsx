import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";


import { FaRunning } from 'react-icons/fa';
import { FcMenu } from 'react-icons/fc';
import { BsTable } from 'react-icons/bs';
import { AiFillSignal } from 'react-icons/ai';

import Tables from './pages/Table';
import Ranking from './pages/Ranking';

const TopBar = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #E9EAEE;
  position: fixed;
  width: 100%;
`;

const Logo = styled.div`
  width: 100px;
  height: 100%;
  border-right: 1px solid #E9EAEE;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  background-color: #EEF2F5;
  position: fixed;
`;

const SideBar = styled.div`
  width: 100px;
  height: 95vh;
  background-color: #374C70;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SideBlock = styled.div`
  background-color: #304262;
  width: 72px;
  height: 80px;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



function App() {

  return (
    <Router>
      <TopBar>
        <Logo>
          <FaRunning style={{ color: "#374C70", width: "28px", height: "auto", marginRight: "8px" }} />
          <FcMenu style={{ color: "#9BB1DB", width: "20px", height: "auto" }} />
        </Logo>
        <Top>Run Table</Top>
        <Top></Top>
      </TopBar>
      <Body>
        <SideBar>
          <NavLink style={{color: "#90A3BD", borderLeft: "4px solid #304262", textDecoration: "none", marginTop: "14px" }} activeStyle={{ color: "#00B6E6", borderLeft: "4px solid #00B6E6" }} exact to="/">
            <SideBlock>
              <BsTable style={{ width: "25px", height: "auto", marginBottom: "5px" }} />
              <div >Tables</div>
            </SideBlock>
          </NavLink>
          <NavLink style={{color: "#90A3BD", borderLeft: "4px solid #304262", textDecoration: "none", marginTop: "14px" }} activeStyle={{ color: "#00B6E6", borderLeft: "4px solid #00B6E6"}} to="/ranking">
            <SideBlock >
              <AiFillSignal style={{ width: "25px", height: "auto", marginBottom: "5px" }} />
              <div >Ranking</div>
            </SideBlock>
          </NavLink>

        </SideBar>
        <Switch>
          <Route exact path="/">
            <Tables />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>
        </Switch>
      </Body>
    </Router>
  );
}

export default App;

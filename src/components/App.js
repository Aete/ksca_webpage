import { createContext, useReducer } from 'react';

import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

import Home from '../components/Pages/Home'

import reducer from '../reducer';
import {initialState} from '../state';
import {changeTool} from '../actions';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

export const DispatchContext = createContext(null);
export const StateContext = createContext(null);

function App() {
  const buttons = ['home', 'monitoring', 'table', 'logout' ];
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tool } = state;

  const handleClick = (newTool) => {
    dispatch(changeTool(newTool));
  };

  const handleLogout = () => {
    dispatch();
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <AppContainer>
          <GlobalStyles />
          <Home buttons = {buttons} tool = {tool} handleClick = {handleClick}/>
        </AppContainer>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;

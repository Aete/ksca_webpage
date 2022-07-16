import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

import Home from '../components/Pages/Home'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

function App() {
  return (
    <AppContainer>
       <GlobalStyles />
       <Home />
    </AppContainer>
  );
}

export default App;

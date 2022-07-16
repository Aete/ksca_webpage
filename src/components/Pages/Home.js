import Header from '../Organisms/Header';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
    return (
      <HomeContainer>
        <Header />
      </HomeContainer>
    );
  }
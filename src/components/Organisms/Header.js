import { useContext } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const Title = styled.h1`
  font-family: 'Noto Sans KR';
  font-weight: 700;
  font-size: 30px;
  color: #424242;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Title>KSCA</Title>
    </HeaderContainer>
  );
}
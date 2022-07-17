import styled from 'styled-components';

import SideBar from '../Organisms/SideBar';
import Main from '../Organisms/Main';



const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0;
  display: flex;
  flex-direction: row-reverse;
`;

export default function Home({buttons, tool, handleClick}) {
      return (
      <HomeContainer>
        <Main tool = {tool}/>
        <SideBar buttons = {buttons} tool = {tool} handleClick = {handleClick}/>
      </HomeContainer>
    );
}
import styled from 'styled-components';

import {Button} from '../atoms/Button';
import {Icon} from '../atoms/Icon';

const Bar = styled.div`
  width: 60px;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1),
    0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
`;

export default function SideBar({buttons, tool, handleClick}) {
  return (
    <Bar>
      {buttons.map((btn) =>{
        return (<Button
          key={`${btn}Btn`}
          onClick={() => handleClick(btn)}
        >
        <Icon tool = {btn} isActive={btn === tool} />
        </Button>)
      })}
    </Bar>
  );
}
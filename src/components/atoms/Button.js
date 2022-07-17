import styled from 'styled-components';
import { Navy, White } from '../../utils/color';

const buttonSize = 44;

export const Button = styled.button`
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  background: ${White};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &&:focus {
    outline: none;
  }
`;
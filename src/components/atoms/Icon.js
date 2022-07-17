import styled from 'styled-components';
import {Black, LightGray} from '../../utils/color';

const MaterialIcon = styled.span`
    color: ${(props)=>{
        return (props.isActive? Black : LightGray)}};
`

export const Icon = (props) => (<MaterialIcon className = {`material-symbols-outlined`} isActive = {props.isActive}>{props.tool}</MaterialIcon>)




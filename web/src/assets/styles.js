import styled from 'styled-components';
import deDia from './sun.gif';
import deNoite from './moon.gif';

export const DiaNoite = styled.div`
  background: ${props => props.time} ;
  background-image: url(${props => (props.time === '#5AD5FC') ? deDia : deNoite});
  color: ${props => (props.time === '#5AD5FC') ? '#222222' : '#ddd'};
  background-repeat: no-repeat;
  background-size: 200px;
  background-position: center;
  width: 100%; 
  padding: 15px 5px;
  
`;
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 10px 0;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: flex-start;
  padding: 0 14px;
  background-color: #e6e6e6;
`;

export const Input = styled.input`
  height: 44px;
  width: calc(100% - 40px);
  border: none;
  border-radius: 3px;
  padding: 7px 12px;
  background-color: #e6e6e6;

  &:focus {
    outline: none;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #a5a5a5;
  width: 20px;
`;

export const IconPassword = styled(FontAwesomeIcon)`
  color: #a5a5a5;
  width: 20px;
  cursor: pointer;
`;

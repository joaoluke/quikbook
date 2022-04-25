import styled from 'styled-components';

interface ContainerButtonProps {
  background: string;
}

interface ContainerProps {
  width: string;
}

export const Container = styled.div<ContainerProps>`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 10px 0;
  width: ${({ width }) => width || '100%'};
`;

export const ContainerButton = styled.div<ContainerButtonProps>`
  display: flex;
  align-items: center;
  width: 70%;
  height: 44px;
  justify-content: center;
  background-color: ${({ background }) => background || '#fff'};
  color: #fff;
  font-size: 15px;
`;

import styled from 'styled-components';

interface ContainerButtonProps {
  fontSize: string;
  color: string;
  padding: string;
}

export const Container = styled.p<ContainerButtonProps>`
  color: ${({ color }) => color || '#fff'};
  font-size: ${({ fontSize }) => fontSize || '10px'};;
  padding: ${({ padding }) => padding || '0 65px'};
  text-align: center;
`;

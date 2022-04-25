import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: calc(100vh - 160px);
  background: linear-gradient(#f53a7d, transparent),
    linear-gradient(to top left, #3f95f9, transparent),
    linear-gradient(to top right, #4ac4fe, transparent);
  background-blend-mode: screen;
  overflow-y: scroll;
`;

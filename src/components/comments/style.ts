import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid #a1a1a1;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InsertComment = styled.div`
  margin: 20px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .input {
    width: 90%;
    border-radius: 9px;
    border: 1px solid #a1a1a1;
    height: 60px;
    padding: 0 10px;
  }

  .icon {
    color: #a1a1a1;
    cursor: pointer;
  }
`;

export const Comment = styled.section`
  width: 100%;
  border-radius: 10px;
  padding: 4px;
  margin: 8px;
  box-shadow: 1px 1px 4px 1px #a1a1a1;
  font-size: 14px;

  .user-information {
    display: flex;
  }
`;

export const Icon = styled.div`
  margin-right: 12px;
  height: 26px;
  background: #d3f1ff;
  width: 26px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

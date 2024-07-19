import styled from "styled-components";

export const ContainerGeral = styled.div`
  height: 100vh;
  display: flex;
`;
export const ButtonTheme = styled.button`
  margin: 15px;
  padding: 08px 25px;
  font-weight: 700;
  border: none;
  border-radius: 06px;
  cursor: pointer;
  color: #fff;
  background-color: ${({ theme }) => theme.background01};
  color: ${({ theme }) => theme.color02};
  position: absolute;
  right: 16px;
  transition: 0.2s;
  &:hover {
    background-color: #000;
    transition: 0.2s;
  }
`;

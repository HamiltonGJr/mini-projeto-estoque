import styled from "styled-components";

export const ContainerListProduct = styled.div`
  width: 75%;
  height: 100vh;
  overflow-y: auto;
`;
export const HeaderProduct = styled.header`
  display: flex;
  justify-content: space-between;
`;
export const ButtonTheme = styled.button`
  margin: 15px;
  padding: 0 25px;
  font-weight: 700;
  border: none;
  border-radius: 06px;
  cursor: pointer;
  color: #fff;
  background-color: #458c72;
  transition: 0.2s;
  &:hover {
    background-color: #29a678;
    transition: 0.2s;
  }
`;
export const SubTitleProduct = styled.h2`
  margin: 15px;
  font-size: 34px;
`;
export const ListProduct = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

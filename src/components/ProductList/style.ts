import styled from "styled-components";

export const ContainerListProduct = styled.div`
  width: 75%;
  height: 100vh;
  overflow-y: auto;
  color: ${({ theme }) => theme.color};
`;
export const HeaderProduct = styled.header`
  display: flex;
  justify-content: space-between;
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

import styled from "styled-components";

export const ContainerProduct = styled.li`
  margin: 05px 16px;
  padding: 15px;
  width: 25%;
  border: 4px solid #004793;
  border-radius: 08px;
  list-style-type: none;
`;
export const NameProduct = styled.h3`
  padding: 05px;
  margin-bottom: 15px;
  text-align: center;
  border-radius: 08px;
  color: #fff;
  background-color: #004793;
`;
export const ContainerButton = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const ButtonProduct = styled.button`
  margin: 0 10px;
  padding: 05px 15px;
  width: 150px;
  font-weight: 600;
  border: none;
  border-radius: 06px;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => props.color};
`;

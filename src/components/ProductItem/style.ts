import styled from "styled-components";

export const ContainerProduct = styled.li`
  margin: 05px 16px;
  padding: 15px;
  width: 27%;
  border: 1px solid #468c73;
  border-radius: 04px;
  list-style-type: none;
  background-color: #29a678;
`;
export const NameProduct = styled.h3`
  padding: 05px;
  margin-bottom: 15px;
  text-align: center;
  border: 1px solid #468c73;
  border-radius: 02px;
  color: #3c3c40;
  background-color: #fff;
`;
export const TextProduct = styled.p`
  color: #3c3c40;
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
export const InputProduct = styled.input`
  padding: 01px 12px;
  border: 1px solid #3c3c40;
  border-radius: 02px;
`;

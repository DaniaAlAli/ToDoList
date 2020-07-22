import styled, { createGlobalStyle } from "styled-components";

export const AddButtonStyle = styled.div`
  font-size: 20px;
  padding: 5px;
  margin-top: 10px;
  p {
    display: inline-flex;
    font-family: "Londrina Sketch", cursive;
    color: green;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const CreateButtonStyled = styled.button`
  color: red;
  background-color: grey;
  &:hover {
    color: grey;
    background-color: red;
  }
`;

export const DeleteButtonStyled = styled.p`
  float: right;
  text-align: center;
  padding-right: 15px;
`;

export const GlobalStyle = createGlobalStyle`
body{
  background-image: url("https://img.wallpapersafari.com/desktop/1920/1080/20/86/b3CjtL.jpg");

    }
`;

export const ListStyled = styled.div`
  margin-top: 77px;
  color: black;
  font-family: "Cabin Sketch", cursive;
  font-size: 65px;
  font-weight: bold;
`;

export const ListGroupItemStyled = styled.div`
  font-family: "Rock Salt", cursive;
  border: 1px solid white;
  color: red;

  h1 {
    font-weight: bold;
    color: #01018e;
    border: 2px solid #01018e;
    background-color: #7f7fed;
    border-radius: 15px;
    width: 100px;
    text-align: center;
    font-size: 15px;
  }
  h2 {
    font-weight: bold;
    font-size: 30px;
    span {
      font-size: 25px;
      color: black;
      font-weight: bold;
    }
  }

  p {
    font-weight: bold;
    font-size: 20px;
    span {
      font-size: 15px;
      color: black;
      font-weight: bold;
    }
  }
`;

export const StatusButtonStyled = styled.p`
  float: right;
  text-align: center;
  margin-right: 10px;
`;

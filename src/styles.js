import styled, { createGlobalStyle } from "styled-components";

export const AddButtonStyle = styled.div`
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 20px;
  p {
    display: inline-flex;
    font-family: "Londrina Sketch", cursive;
    color: green;
    font-size: 40px;
    font-weight: bold;
  }
`;

export const CreateButtonStyled = styled.button`
  color: red;
  background-color: grey;
  font-family: "Londrina Sketch", cursive;
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
  opacity: .9;
  }
`;

export const ListStyled = styled.div`
  margin-top: 142px;
  color: black;
  font-family: "Cabin Sketch", cursive;
  font-size: 65px;
  font-weight: bold;
`;

export const ListGroupItemStyled = styled.div`
  font-family: "Rock Salt", cursive;
  border-bottom: 1.5px solid white;
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
    &.duedate {
      color: blue;
      text-align: center;
    }
  }
`;

export const StatusButtonStyled = styled.p`
  float: right;
  text-align: center;
  margin-right: 10px;
`;

export const TitleWrap = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  margin-top: 63px;
  text-align: center;
  color: red;
  img {
    width: 35%;
  }
`;

export const Title = styled.h1`
  font-family: "Cabin Sketch", cursive;
  font-size: 90px;
`;

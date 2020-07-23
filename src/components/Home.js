import React from "react";
import { Link } from "react-router-dom";

//Styles
import { Title, TitleWrap } from "../styles";

const Home = () => {
  return (
    <>
      <TitleWrap>
        <Title>Make Your</Title>
        <Title>TO-DO-LIST!!</Title>{" "}
        <Link to={`/task`}>
          <img
            alt="logo"
            src="https://cdn.onlinewebfonts.com/svg/img_464400.png"
          ></img>
        </Link>
      </TitleWrap>
    </>
  );
};

export default Home;

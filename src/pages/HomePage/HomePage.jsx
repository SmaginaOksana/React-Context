import React from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";

function HomePage(props) {
  const navigate = useNavigate();
  const createUser = () => {
    navigate("/createUser");
  };
  const seeUsers = () => {
    navigate("/usersData");
  };

  return (
    <>
      <div className="homeContainer">
        <button
          onClick={() => {
            createUser();
          }}
        >
          Create user
        </button>
        <button
          onClick={() => {
            seeUsers();
          }}
        >
          See list of users
        </button>
      </div>
    </>
  );
}

export default HomePage;

import React from "react";
import UserData from "../../components/UserData/UserData";
import "./UsersDataPage.scss";
import { useContext } from "react";
import { Context } from "../../context/ContextComponent";
import { useNavigate } from "react-router-dom";

function UsersDataPage() {
  const navigate = useNavigate();
  const { valueContext } = useContext(Context);

  return (
    <>
      <div className="usersContainer">
        {valueContext.length ? "" : <p>There are no users</p>}

        <div className="users">
          {valueContext.map((item, index) => {
            return <UserData item={item} key={index} />;
          })}
        </div>
        <button
          className="back"
          onClick={() => {
            navigate("/");
          }}
        >
          Home Page
        </button>
      </div>
    </>
  );
}

export default UsersDataPage;

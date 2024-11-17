import React, { useState, useContext } from "react";
import "./CreateUserData.scss";
import { Context } from "../../context/ContextComponent";
import { useNavigate } from "react-router-dom";

function CreateUserData() {
  const navigate = useNavigate();
  const { setUpdate } = useContext(Context);
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [birth, setBirth] = useState("");
  const [user, setUser] = useState("");

  const submit = () => {
    if (!name || !surname || !birth) {
      setUser(false);
      return;
    }
    postData({ name: name, surname: surname, birth: birth });
  };

  async function postData(data) {
    try {
      await fetch("http://localhost:3001/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }).then(() => {
        setUpdate((prev) => !prev);
        setName("");
        setSurName("");
        setBirth("");
        setUser({ status: true });
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        className="createForm"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <p className="title">Enter your data:</p>
        <div className="name">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="surname">
          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(event) => {
              setSurName(event.target.value);
            }}
          />
        </div>
        <div className="birth">
          <label>Дата рождения:</label>
          <input
            type="date"
            value={birth}
            onChange={(event) => {
              setBirth(event.target.value);
            }}
          />
        </div>
        {user === false ? (
          <p className="empty">Please, enter all the fields!</p>
        ) : (
          ""
        )}
        {user ? <p>Your data has been sent successfully!</p> : ""}
        <div>
          <button className="send">SEND</button>
        </div>
      </form>
      <button
        className="back"
        onClick={() => {
          navigate("/");
        }}
      >
        Home Page
      </button>
    </>
  );
}

export default CreateUserData;

import "./UserData.scss";
import { Context } from "../../context/ContextComponent";
import { useContext } from "react";

function UserData({ item }) {
  const { setUpdate } = useContext(Context);
  const { name, surname, birth, id } = item;

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:3001/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      setUpdate((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="userData">
      <span>{name}</span>
      <span>{surname}</span>
      <span>{birth}</span>
      <button
        className="delete"
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete user
      </button>
    </div>
  );
}

export default UserData;

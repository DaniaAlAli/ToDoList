import React from "react";

//Style
import { DeleteButtonStyled } from "../../styles";

//Store
import taskStore from "../../store/TaskStore";

const DeleteButton = ({ taskID }) => {
  const handleDelete = () => taskStore.deleteTask(taskID);
  return (
    <DeleteButtonStyled onClick={handleDelete}>
      {" "}
      <span style={{ fontSize: "140%" }}>{"🗑"}</span>{" "}
    </DeleteButtonStyled>
  );
};

export default DeleteButton;

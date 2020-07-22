import React from "react";

//Style
import { StatusButtonStyled } from "../../styles";

//Store
import taskStore from "../../store/TaskStore";

const StatusButton = ({ task }) => {
  return (
    <>
      <StatusButtonStyled
        onClick={() => taskStore.updateTask(task.id)}
        style={{ fontSize: "45%" }}
      >
        {" "}
        {task.click ? "✅" : "❌"}{" "}
      </StatusButtonStyled>
    </>
  );
};

export default StatusButton;

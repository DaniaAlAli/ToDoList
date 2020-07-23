import React from "react";

//Style
import { ListGroupItemStyled } from "../styles";

//Component
import DeleteButton from "./buttons/DeleteButton";
import StatusButton from "./buttons/StatusButton";

const TaskItem = ({ task }) => {
  return (
    <>
      <ListGroupItemStyled>
        <h1>{task.status}</h1> <DeleteButton taskID={task.id} />{" "}
        <StatusButton task={task}> </StatusButton>
        <h2>
          {" "}
          <span>Task:</span> {task.name}
        </h2>{" "}
        <p>
          <span>Details:</span> {task.details}
        </p>
        <p className="duedate">
          <span>Due Date:</span> {task.date}
        </p>
      </ListGroupItemStyled>
    </>
  );
};

export default TaskItem;

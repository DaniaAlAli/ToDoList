import React from "react";
import { observer } from "mobx-react";

//Components
import TaskItem from "./TaskItem";
import AddButton from "./buttons/AddButton";

//Store
import taskStore from "../store/TaskStore";

//Style
import { ListStyled } from "../styles";

const TaskList = () => {
  var today = new Date();
  var todayDate =
    today.getFullYear() + "-0" + (today.getMonth() + 1) + "-" + today.getDate();

  console.log("Date:", todayDate);
  const taskToday = taskStore.tasks
    .filter((task) => task.date === todayDate && task.click === true)
    .map((task) => <TaskItem task={task} key={task.id} />);

  const taskFuture = taskStore.tasks
    .filter((task) => task.date !== todayDate && task.click === true)
    .map((task) => <TaskItem task={task} key={task.id} />);

  const done = taskStore.tasks
    .filter((task) => task.click === false)
    .map((task) => <TaskItem task={task} key={task.id} />);

  return (
    <div className="container">
      <div className="row">
        <AddButton />

        <ListStyled className="col-5">
          <p style={{ textAlign: "center", marginRight: "15px" }}>
            {" "}
            - Today's Tasks{" "}
          </p>
          {taskToday}
        </ListStyled>
        <ListStyled className="col-5">
          <p style={{ textAlign: "center", marginLeft: "15px" }}>
            {" "}
            - Future Tasks
          </p>
          {taskFuture}
        </ListStyled>
      </div>
      <div className="row-2">
        <ListStyled
          style={{ textAlign: "center", color: "green", marginLeft: "40px" }}
        >
          Done {done}
        </ListStyled>
      </div>
    </div>
  );
};

export default observer(TaskList);

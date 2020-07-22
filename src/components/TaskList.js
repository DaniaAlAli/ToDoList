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
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  // var tomorrow = new Date();
  // var tomorrowDate =
  //   tomorrow.getDate() +
  //   1 +
  //   "/" +
  //   (tomorrow.getMonth() + 1) +
  //   "/" +
  //   tomorrow.getFullYear();

  console.log("Date:", todayDate);
  const taskToday = taskStore.tasks
    .filter((task) => task.date <= todayDate && task.click === true)
    .map((task) => <TaskItem task={task} key={task.id} />);

  const taskFuture = taskStore.tasks
    .filter((task) => task.date > todayDate && task.click === true)
    .map((task) => <TaskItem task={task} key={task.id} />);

  const done = taskStore.tasks
    .filter((task) => task.click === false)
    .map((task) => <TaskItem task={task} key={task.id} />);

  return (
    <div className="container">
      <div className="row">
        <AddButton />

        <ListStyled className="col-5">
          <p> - Today's Tasks </p>
          {taskToday}
        </ListStyled>
        <ListStyled className="col-5">
          <p> - Future Tasks</p>
          {taskFuture}
        </ListStyled>
      </div>
      <div className="row-2">
        <ListStyled style={{ textAlign: "center" }}>Done {done}</ListStyled>
      </div>
    </div>
  );
};

export default observer(TaskList);
